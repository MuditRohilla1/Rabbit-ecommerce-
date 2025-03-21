import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProducts = {
  name: "Stylish Jacket",
  price: 100,
  originalPrice: 150,
  description: "This is a Stylish Jacket perfect for any occasion",
  brand: "Fashion Brand",
  material: "leather",
  sizes: ["S", "M", "L", "XL"],
  color: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/200/200?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/200/200?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=3",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=4",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=5",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=6",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProducts?.images?.length > 0) {
      setMainImage(selectedProducts.images[0].url);
    }
  }, [selectedProducts]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("please select a color and size before adding to cart", {
        duration: 1500,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to Cart!", {
        duration: 1500,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6 border min-h-screen bg-[#57B4BA]">
      <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">
        Best Seller
      </h2>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Thumbnails (Desktop) */}
          <div className="hidden md:flex flex-col space-y-4">
            {selectedProducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 hover:border-gray-400 transition-all ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="mb-6">
              <img
                src={mainImage || selectedProducts.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overflow-x-auto gap-4 pb-4">
              {selectedProducts.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 hover:border-gray-400 transition-all ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* Right Side (Product Details) */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedProducts.name}
            </h1>

            {/* Price Section */}
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xl font-semibold text-gray-800">
                ${selectedProducts.price}
              </p>
              {selectedProducts.originalPrice && (
                <p className="text-md text-gray-500 line-through">
                  ${selectedProducts.originalPrice}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm">
              {selectedProducts.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Color:</p>
              <div className="flex gap-2">
                {selectedProducts.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border transition-all ${
                      selectedColor === color
                        ? "border-2 border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Size:</p>
              <div className="flex gap-2">
                {selectedProducts.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border-2 border-gray-200 hover:border-gray-400 transition-all text-sm text-gray-700 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Quantity:</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"
                >
                  -
                </button>
                <span className="text-md">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-all mb-6 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add To Cart"}
            </button>

            {/* Product Characteristics */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Characteristics:
              </h3>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-600 text-sm">Brand</td>
                    <td className="py-1 font-medium text-gray-800 text-sm">
                      {selectedProducts.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-600 text-sm">Material</td>
                    <td className="py-1 font-medium text-gray-800 text-sm">
                      {selectedProducts.material}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-black bg-[#57B4BA] rounded-lg">
        <h2 className="text-4xl text-center font-bold mb-4 mt-5">
          You May Also Like
        </h2>
        <ProductGrid products={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
