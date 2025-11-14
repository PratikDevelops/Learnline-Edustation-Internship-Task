import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaCartPlus } from "react-icons/fa";

const ProductList = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-24 h-24 object-cover rounded-xl mb-3"
            />
            <h3 className="font-medium text-gray-800 text-sm sm:text-base">
              {p.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              {p.category}
            </p>
            <p className="text-gray-800 font-semibold mb-3">${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition text-sm"
            >
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
