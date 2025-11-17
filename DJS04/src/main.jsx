import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PodcastProvider } from "./context/PodcastContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PodcastProvider>
    <App />
  </PodcastProvider>
);
