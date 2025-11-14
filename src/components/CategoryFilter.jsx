import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const categories = ["All", "Electronics", "Books", "Clothing"];

const CategoryFilter = () => {
  const { category, setCategory } = useContext(ShopContext);

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            category === cat
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
