// src/blog/blogData.js
export const blogPosts = [
  {
    title: "React Tips Every Dev Should Know",
    slug: "react-tips",
    summary: "Clean tricks for production-grade React apps...",
    cover: "/src/assets/blog1.svg",
    content: `
### 🧠 React Tips Every Developer Should Know

1. Use useCallback to optimize re-renders...
2. Prefer controlled components...
3. Split code with lazy() and Suspense...
`,
  },
  {
    title: "Mastering Tailwind CSS Layouts",
    slug: "tailwind-layouts",
    summary: "Build fast and flexible UIs with Tailwind grid and flex...",
    cover: "/src/assets/blog2.svg",
    content: `
### 🎨 Tailwind Layout Magic

- Grid: Use grid-cols-2, grid-rows-3...
- Flex: justify-between, items-center...

Tips for responsive spacing and sizing...
`,
  },
];
