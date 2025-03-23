import { Link } from "react-router-dom";

const AdminHome = () => {
  const orders = [
    {
      _id: 2345,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 2345,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 2345,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 2345,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 2345,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-1">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">$11,000</p>
        </div>

        {/* Total Orders Card */}
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
          <p className="text-2xl font-bold text-gray-700 mt-2">1,200</p>
          <Link
            to="/admin/orders"
            className="mt-3 inline-block text-blue-600 hover:underline font-medium"
          >
            Manage Orders →
          </Link>
        </div>

        {/* Total Products Card */}
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Products
          </h2>
          <p className="text-2xl font-bold text-gray-700 mt-2">110</p>
          <Link
            to="/admin/products"
            className="mt-3 inline-block text-blue-600 hover:underline font-medium"
          >
            Manage Products →
          </Link>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="w-full overflow-hidden">
          <div className="min-w-full bg-white shadow-md rounded-lg border border-gray-200 overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Head */}
              <thead className="bg-gray-900 text-white text-sm uppercase">
                <tr>
                  <th className="py-4 px-6 text-center">Order ID</th>
                  <th className="py-4 px-6 text-center">User</th>
                  <th className="py-4 px-6 text-center">Total Price</th>
                  <th className="py-4 px-6 text-center">Status</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b hover:bg-gray-100 transition-all"
                    >
                      <td className="p-4 text-gray-800 text-center">
                        {order._id}
                      </td>
                      <td className="p-4 text-gray-700 text-center">
                        {order.user.name}
                      </td>
                      <td className="p-4 font-semibold text-gray-800 text-center">
                        ${order.totalPrice.toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      No Recent Orders Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
