"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ product, outline = false }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button className={`btn ${outline ? "btn-outline" : ""}`} onClick={handleClick}>
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
