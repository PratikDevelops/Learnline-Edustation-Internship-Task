import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, total } = useContext(ShopContext);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {item.name} (x{item.qty}) - ${item.price * item.qty}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold text-lg mt-5 text-gray-800">
        Total: ${total}
      </p>
    </div>
  );
};

export default Cart;
