import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const EditProducts = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
        Edit Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          {
            label: "Product Name",
            name: "name",
            type: "text",
            placeholder: "Nike Air Max",
          },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            placeholder: "A stylish and comfortable sneaker",
          },
          {
            label: "Price",
            name: "price",
            type: "number",
            placeholder: "99.99",
          },
          {
            label: "Count In Stock",
            name: "countInStock",
            type: "number",
            placeholder: "50",
          },
          { label: "SKU", name: "sku", type: "text", placeholder: "NAIR12345" },
          {
            label: "Category",
            name: "category",
            type: "text",
            placeholder: "Footwear",
          },
          { label: "Brand", name: "brand", type: "text", placeholder: "Nike" },
          {
            label: "Collection",
            name: "collections",
            type: "text",
            placeholder: "Summer Collection 2025",
          },
          {
            label: "Material",
            name: "material",
            type: "text",
            placeholder: "Leather",
          },
          {
            label: "Gender",
            name: "gender",
            type: "text",
            placeholder: "Unisex",
          },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="w-full">
            <label className="block font-semibold text-gray-700 mb-2">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={productData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                placeholder={placeholder}
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                value={productData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder={placeholder}
                required
              />
            )}
          </div>
        ))}

        <div className="w-full">
          <label className="block font-semibold text-gray-700 mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="S, M, L, XL"
            required
          />
        </div>

        <div className="w-full">
          <label className="block font-semibold text-gray-700 mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 capitalize"
            placeholder="Red, Blue, Green"
            required
          />
        </div>

        <div className="w-full md:col-span-2">
          <label className="block font-semibold text-gray-700 mb-2">
            Upload Image
          </label>
          <label className="flex items-center gap-3 border border-gray-300 rounded-md p-2 cursor-pointer">
            <FaCloudUploadAlt size={24} className="text-gray-500" />
            <span className="text-gray-600">Click to upload image</span>
            <input
              type="file"
              name="file"
              onChange={handleImageUpload}
              className="hidden"
              required
            />
          </label>
          <div className="flex flex-wrap gap-4 mt-4">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "Product Image"}
                className="w-20 h-20 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>

        <div className="w-full md:col-span-2">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProducts;