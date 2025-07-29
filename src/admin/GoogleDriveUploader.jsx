import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "179283066239-6a51bpgt2tdrl51b92ssnosu5gkgmecd.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

const GoogleDriveUploader = ({ onUpload }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: SCOPES,
        })
        .then(() => {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      console.log("Signed in to Google");
    }
  };

  const handleUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const metadata = {
        name: file.name,
        mimeType: file.type,
      };

      const accessToken = gapi.auth.getToken().access_token;
      const form = new FormData();
      form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
      form.append("file", file);

      const res = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
        method: "POST",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
        body: form,
      });

      const data = await res.json();
      const fileId = data.id;
      const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      onUpload(imageUrl); // Pass back to parent
    };

    fileInput.click();
  };

  return (
    <button
      onClick={() => {
        const auth = gapi.auth2.getAuthInstance();
        if (!auth.isSignedIn.get()) {
          auth.signIn();
        } else {
          handleUpload();
        }
      }}
      className="px-4 py-2 bg-green-600 text-white rounded-lg mt-2"
    >
      📂 Upload from Google Drive
    </button>
  );
};

export default GoogleDriveUploader;
