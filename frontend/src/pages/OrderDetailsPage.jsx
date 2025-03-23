import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1",
          name: "jacket",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "tshirt",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details Found 🥲</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order Id: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                Order Date:{" "}
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <div className="flex">
                <h4 className="text-md md:text-lg font-semibold mr-2">
                  Payment:
                </h4>
                <span
                  className={`${
                    orderDetails.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } px-3 py-1 rounded-full text-sm font-medium mb-2`}
                >
                  {orderDetails.isPaid ? "Approved" : "Pending"}
                </span>
              </div>

              <div className="flex">
                <h4 className="text-md md:text-lg font-semibold mr-2">
                  Delivery:
                </h4>
                <span
                  className={`${
                    orderDetails.isDelivered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  } px-3 py-1 rounded-full text-sm font-medium mb-2`}
                >
                  {orderDetails.isDelivered ? "Delivered" : "Pending"}
                </span>
              </div>
            </div>
          </div>
          {/* Customer Payment Shipping */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Approved" : "Pending"}</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Shipping Info</h4>
              <p>Payment Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Producst List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-gray-700 mb-4 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-gray-900 text-sm sm:text-base">
                      <tr>
                        <th className="py-2 px-4 text-left border-b">Name</th>
                        <th className="py-2 px-4 text-left border-b">
                          Unit Price
                        </th>
                        <th className="py-2 px-4 text-left border-b">
                          Quantity
                        </th>
                        <th className="py-2 px-4 text-left border-b">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.orderItems.map((item) => (
                        <tr
                          key={item.productId}
                          className="border-b hover:bg-gray-50 transition duration-200"
                        >
                          <td className="py-2 px-4 flex items-center text-sm sm:text-base">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-lg shadow-md mr-3"
                            />
                            <Link
                              to={`/product/${item.productId}`}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td className="py-2 px-4 text-gray-800 font-medium text-sm sm:text-base">
                            ${item.price}
                          </td>
                          <td className="py-2 px-4 text-gray-800 font-medium text-sm sm:text-base">
                            {item.quantity}
                          </td>
                          <td className="py-2 px-4 text-gray-900 font-semibold text-sm sm:text-base">
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Back to Orders */}
                <Link to="/my-orders" className=" text-blue-500 hover:underline">
                    Back To My Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
