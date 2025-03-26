import { Link } from "react-router-dom";

const ProductsManagement = () => {
  const products = [
    { _id: 1234, name: "Product 1", price: 10.99, sku: "1234567" },
    { _id: 1235, name: "Product 2", price: 12.49, sku: "2345678" },
    { _id: 1236, name: "Product 3", price: 15.99, sku: "3456789" },
    { _id: 1237, name: "Product 4", price: 8.99, sku: "4567890" },
    { _id: 1238, name: "Product 5", price: 19.99, sku: "5678901" },
    { _id: 1239, name: "Product 6", price: 25.49, sku: "6789012" },
    { _id: 1240, name: "Product 7", price: 7.99, sku: "7890123" },
    { _id: 1241, name: "Product 8", price: 22.99, sku: "8901234" },
    { _id: 1242, name: "Product 9", price: 30.99, sku: "9012345" },
    { _id: 1243, name: "Product 10", price: 18.99, sku: "0123456" },
    { _id: 1244, name: "Product 11", price: 11.99, sku: "1123456" },
  ];

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      console.log(productId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-1 md:p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Product Management
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full text-center text-gray-600">
          <thead className="bg-gray-800 text-white text-sm uppercase">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Sku</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4 text-gray-700">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-4 text-gray-500">{product.sku}</td>
                  <td className="p-4 flex justify-center space-x-2">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Products Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManagement;
