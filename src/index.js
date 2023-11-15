import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navigation from "./components/Navigation";

const element = document.getElementById("root");
const root = createRoot(element);

const App = () => (
  <div>
    <Navigation />
  </div>
);

root.render(<App />);
