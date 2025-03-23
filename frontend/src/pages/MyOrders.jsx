import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: 1,
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Laptop",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 1200,
          isPaid: true,
        },
        {
          _id: 2,
          createdAt: new Date(),
          shippingAddress: { city: "Los Angeles", country: "USA" },
          orderItems: [
            {
              name: "Smartphone",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 800,
          isPaid: false,
        },
        {
          _id: 3,
          createdAt: new Date(),
          shippingAddress: { city: "London", country: "UK" },
          orderItems: [
            {
              name: "Headphones",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: 4,
          createdAt: new Date(),
          shippingAddress: { city: "Sydney", country: "Australia" },
          orderItems: [
            {
              name: "Smartwatch",
              image: "https://picsum.photos/500/500?random=4",
            },
          ],
          totalPrice: 300,
          isPaid: false,
        },
        {
          _id: 5,
          createdAt: new Date(),
          shippingAddress: { city: "Toronto", country: "Canada" },
          orderItems: [
            {
              name: "Tablet",
              image: "https://picsum.photos/500/500?random=5",
            },
          ],
          totalPrice: 500,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-gray-500 border border-gray-200">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Order Id</th>
              <th className="py-2 px-4">Created</th>
              <th className="py-2 px-4">Shipping</th>
              <th className="py-2 px-4">Items</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b text-sm sm:text-base hover:bg-gray-50"
                >
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 font-medium text-gray-900">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You Have No Orders.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
