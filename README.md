# text-rotation

A simple and customizable React component to render animated circular text around a centered logo. Perfect for branding, loading screens, or decorative elements in your React projects.

<!-- ![demo](https://your-demo-image-or-gif-url.com) Optional demo -->

## ✨ Features

- Circular animated text layout
- Centered logo image
- Customizable radius and font size
- Supports any text and image
- Lightweight and flexible

---

## 🚀 Installation

```bash
npm install @balasaravanan/text-rotation

```

## Usage in React.js

```jsx
import TextRotation from "@balasaravanan/text-rotation";

function App() {
  return (
    <TextRotation
      text="Circular Text Logo"
      radius={120}
      fontSize="1.5rem"
      pathToImg="/logo.png" // if in public folder
    />
  );
}
```
