// src/ShippingPolicy.js
import React from "react";

export default function ShippingPolicy() {
  return (
    <section id="shipping-policy" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">
          Shipping & Delivery Policy
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Delivery Zones:</strong> We currently serve selected pin codes.
            Please verify your address during checkout.
          </p>
          <p>
            <strong>Shipping Times:</strong> Orders placed before 10 PM are
            delivered between 5 AM and 7 AM the next morning. Freshness
            guaranteed!
          </p>
          <p>
            <strong>Shipping Charges:</strong> A flat fee of ₹20 applies to
            orders below ₹300. Free delivery for orders above ₹300.
          </p>
        </div>
      </div>
    </section>
  );
}