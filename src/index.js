import React from "react";
import { createRoot } from "react-dom/client";

const element = document.getElementById("root");
const root = createRoot(element);

const App = () => <h1>Games4Two</h1>;

root.render(<App />);
