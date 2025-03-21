import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartComponents = () => {
  const products = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 2,
      price: 1500,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Hoodie",
      size: "L",
      color: "black",
      quantity: 1,
      price: 30099,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Jeans",
      size: "32",
      color: "blue",
      quantity: 1,
      price: 40,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Sneakers",
      size: "10",
      color: "white",
      quantity: 1,
      price: 50,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Cap",
      size: "One Size",
      color: "green",
      quantity: 3,
      price: 10,
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {products.map((product) => (
        <div
          key={product.productId}
          className="flex flex-col md:flex-row items-center justify-between py-4 border-b"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 rounded-md object-cover"
            />
            <div>
              <h2 className="text-sm md:text-base font-medium">{product.name}</h2>
              <p className="text-xs text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-3 py-1 text-xs md:text-sm font-medium">
                  -
                </button>
                <span className="mx-3 text-sm">{product.quantity}</span>
                <button className="border rounded px-3 py-1 text-xs md:text-sm font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full md:w-auto mt-4 md:mt-0">
            <p className="text-sm md:text-base font-medium">
              ${product.price.toLocaleString()}
            </p>
            <button className="text-red-500 hover:text-red-600 transition ml-4">
              <RiDeleteBin3Line size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponents;
