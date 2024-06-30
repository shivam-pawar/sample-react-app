import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div>Hello, React!</div>;
};

const rootElement = document.getElementById("root") as Element;
const root = createRoot(rootElement);

root.render(<App />);
