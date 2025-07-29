{/* BlogData.jsx */}

import { blogPosts } from "./blogData";

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Backend failed, using fallback blogData.js");
      setBlogs(blogPosts); // fallback to local data
    }
  };

  fetchBlogs();
}, []);
