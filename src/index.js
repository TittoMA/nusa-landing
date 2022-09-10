import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import OrderLinks from "./routes/OrderLinks";
import MainPage from "./routes/MainPage";
import ScrollToTop from "./components/ScrollToTop";
import "animate.css/animate.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="beli" element={<OrderLinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
