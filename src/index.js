// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PaymentGateway from "./PaymentGateway";
import ShippingPolicy from "./ShippingPolicy"
import "./index.css"; // Tailwind styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/payment" element={<PaymentGateway />} />
      <Route path="/shipping" element={<ShippingPolicy />} />

    </Routes>
  </BrowserRouter>
);
