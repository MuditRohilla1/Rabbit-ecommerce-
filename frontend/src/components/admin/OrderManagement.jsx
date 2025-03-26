import React, { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      _id: 123456,
      user: {
        name: "John Doe",
      },
      totalPrice: 1233,
      status: "Processing",
    },
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    console.log({ id: orderId, status: newStatus });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="min-w-full text-left text-gray-500 text-sm md:text-base">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4 md:px-6">Order Id</th>
              <th className="py-3 px-4 md:px-6">Customer</th>
              <th className="py-3 px-4 md:px-6">Total Price</th>
              <th className="py-3 px-4 md:px-6">Status</th>
              <th className="py-3 px-4 md:px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-4 md:px-6">{order.user.name}</td>
                  <td className="p-4 md:px-6">${order.totalPrice}</td>
                  <td className="p-4 md:px-6">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="p-2 border rounded w-full"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                  </td>
                  <td className="p-4 md:px-6">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 md:px-6 text-center text-gray-500"
                >
                  No Order found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
