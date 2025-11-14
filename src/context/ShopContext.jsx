import React from "react";
import { createContext, useState } from "react";
import { initialProducts } from "../data/products";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredProducts =
    category === "All"
      ? initialProducts
      : initialProducts.filter((p) => p.category === category);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <ShopContext.Provider
      value={{
        category,
        setCategory,
        filteredProducts,
        cart,
        addToCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
