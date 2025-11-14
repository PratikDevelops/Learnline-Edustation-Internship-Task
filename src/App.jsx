import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ShopProvider } from "./context/ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Product Catalog
        </h1>

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
            <CategoryFilter />
            <ProductList />
          </div>

          <div className="md:w-1/3 w-full">
            <Cart />
          </div>
        </div>
      </div>
    </ShopProvider>
  );
};

export default App;
