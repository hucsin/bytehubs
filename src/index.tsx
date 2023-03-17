import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import App from "./views/App";
import Test from "./views/Test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
// /general/product
// /setting/other
root.render(
  <BrowserRouter>
    <Link to="/app">go </Link>
    <Link to="/app/c">go c</Link>
    <hr />
    <Routes>
      <Route path="/app" element={<App />}>
        <Route path="c" element={<Test />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
