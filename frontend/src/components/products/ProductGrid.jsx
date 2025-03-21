import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/products/${product._id}`}
          className="block transition-transform transform hover:scale-105"
        >
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-64 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {product.name}
            </h3>
            <p className="text-gray-600 font-medium text-base tracking-tight">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
