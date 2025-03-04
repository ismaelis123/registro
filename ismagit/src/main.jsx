import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./Register";

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

export default Main;