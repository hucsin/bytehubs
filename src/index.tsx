import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Link } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Link to="/app">go</Link>
    <Route path="/app" Component={App}></Route>
  </StrictMode>
);
