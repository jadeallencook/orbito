import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navigation from "./components/Navigation";
import Orbito from "./games/orbito";
import Footer from "./components/Footer";
import TapIt from "./games/tapit";

const element = document.getElementById("root");
const root = createRoot(element);

const App = () => (
  <>
    <Navigation />
    <TapIt />
    <Footer />
  </>
);

root.render(<App />);
