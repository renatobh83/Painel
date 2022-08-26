import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles/global.css";
// import "./lib/server.js"
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
