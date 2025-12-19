

import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderReq = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);

  /* ===== FETCH USER ORDERS ===== */
  useEffect(() => {
    axiosSecure
      .get(`/orders`)
      .then(res => {
        console.log("Fetched orders:", res.data);
        setOrders(res.data);
      })
      .catch(err => console.error(err));
  }, [user, axiosSecure]);

  /* ===== UPDATE ORDER STATUS ===== */
  const updateStatus = async (id, status) => {
    try {
      const res = await axiosSecure.patch(`/orders/status/${id}`, { status });
      if (res.data.modifiedCount > 0) {
        setOrders(
          orders.map(order =>
            order._id === id ? { ...order, orderStatus: status } : order
          )
        );
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
      <h2 className="text-[32px] font-bold mb-6">Order Requests</h2>

      <div className="overflow-x-auto bg-base-200 rounded-xl">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-base-300 text-gray-700">
            <tr>
              <th>Meal</th>
              <th>Customer</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.length > 0 ? (
              orders.map(order => (
                <tr key={order._id}>
                  <td>{order.mealName}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.quantity}</td>
                  <td>Tk. {order.totalPrice}</td>
                  <td>{order.deliveryAddress || "—"}</td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`px-3 py-1 text-sm rounded-full
                        ${order.orderStatus === "pending" && "bg-yellow-100 text-yellow-700"}
                        ${order.orderStatus === "accepted" && "bg-blue-100 text-blue-700"}
                        ${order.orderStatus === "delivered" && "bg-green-100 text-green-700"}
                        ${order.orderStatus === "cancelled" && "bg-red-100 text-red-700"}
                      `}
                    >
                      {order.orderStatus}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="flex gap-2 justify-center">
                    <button
                      disabled={order.orderStatus !== "pending"}
                      onClick={() => updateStatus(order._id, "cancelled")}
                      className="btn btn-sm bg-red-500 text-white disabled:opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      disabled={order.orderStatus !== "pending"}
                      onClick={() => updateStatus(order._id, "accepted")}
                      className="btn btn-sm bg-green-600 text-white disabled:opacity-40"
                    >
                      Accept
                    </button>

                    <button
                      disabled={order.orderStatus !== "accepted"}
                      onClick={() => updateStatus(order._id, "delivered")}
                      className="btn btn-sm bg-blue-600 text-white disabled:opacity-40"
                    >
                      Deliver
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderReq;

// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

// const OrderReq = ({ chefId }) => {
//   const axiosSecure = useAxiosSecure();
//   const [orders, setOrders] = useState([]);

//   /* ===== FETCH CHEF ORDERS ===== */
//   useEffect(() => {
//       axiosSecure
//         .get(`/orders/chef/`)
//         .then((res) => {
//           console.log("Fetched orders:", res.data);
//           setOrders(res.data);
//         })
//         .catch((err) => console.error(err));
//   }, [chefId, axiosSecure]);

//   /* ===== UPDATE ORDER STATUS ===== */
//   const updateStatus = async (id, status) => {
//     try {
//       const res = await axiosSecure.patch(`/orders/status/${id}`, { status });
//       if (res.data.modifiedCount > 0) {
//         setOrders(
//           orders.map((order) =>
//             order._id === id ? { ...order, orderStatus: status } : order
//           )
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
//       <h2 className="text-[32px] font-bold mb-6">Order Requests</h2>

//       <div className="overflow-x-auto bg-base-200 rounded-xl">
//         <table className="table w-full">
//           <thead className="bg-base-300 text-gray-700">
//             <tr>
//               <th>Meal</th>
//               <th>Customer</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Delivery</th>
//               <th>Status</th>
//               <th className="text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order.mealName}</td>
//                   <td>{order.userEmail}</td>
//                   <td>{order.quantity}</td>
//                   <td>Tk. {order.price * order.quantity}</td>
//                   <td>{order.deliveryAddress || "—"}</td>

//                   <td>
//                     <span
//                       className={`px-3 py-1 text-sm rounded-full
//                       ${order.orderStatus === "pending" && "bg-yellow-100 text-yellow-700"}
//                       ${order.orderStatus === "accepted" && "bg-blue-100 text-blue-700"}
//                       ${order.orderStatus === "delivered" && "bg-green-100 text-green-700"}
//                       ${order.orderStatus === "cancelled" && "bg-red-100 text-red-700"}
//                     `}
//                     >
//                       {order.orderStatus}
//                     </span>
//                   </td>

//                   <td className="flex gap-2 justify-center">
//                     <button
//                       disabled={order.orderStatus !== "pending"}
//                       onClick={() => updateStatus(order._id, "cancelled")}
//                       className="btn btn-sm bg-red-500 text-white disabled:opacity-40"
//                     >
//                       Cancel
//                     </button>

//                     <button
//                       disabled={order.orderStatus !== "pending"}
//                       onClick={() => updateStatus(order._id, "accepted")}
//                       className="btn btn-sm bg-green-600 text-white disabled:opacity-40"
//                     >
//                       Accept
//                     </button>

//                     <button
//                       disabled={order.orderStatus !== "accepted"}
//                       onClick={() => updateStatus(order._id, "delivered")}
//                       className="btn btn-sm bg-blue-600 text-white disabled:opacity-40"
//                     >
//                       Deliver
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center py-10 text-gray-500">
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderReq;


// import React, { useEffect, useState } from "react";
// // import useAxiosSecure from "../../hooks/useAxiosSecure";
// // import { useAuth } from "../../hooks/useAuth";
// // import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

// const OrderReq = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user, dbUser } = useAuth();
//   // dbUser => { role, chefId, status }

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Load Orders for this Chef
//   useEffect(() => {
//     if (!dbUser?.chefId) return;

//     axiosSecure
//       .get(`/orders/chef/${dbUser.chefId}`)
//       .then((res) => {
//         setOrders(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [axiosSecure, dbUser?.chefId]);

//   // 🔹 Update Order Status
//   const handleStatusUpdate = async (id, status) => {
//     const res = await axiosSecure.patch(`/orders/status/${id}`, { status });
//     if (res.data.modifiedCount > 0) {
//       alert({
//         icon: "success",
//         title: `Order ${status}`,
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       // update UI instantly
//       setOrders((prev) =>
//         prev.map((order) =>
//           order._id === id ? { ...order, orderStatus: status } : order
//         )
//       );
//     }
//   };

//   if (loading) {
//     return <p className="text-center mt-10">Loading orders...</p>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
//       <h2 className="text-[32px] font-bold mb-6">Order Requests</h2>

//       <div className="overflow-x-auto bg-base-200 rounded-xl">
//         <table className="table w-full">
//           <thead className="bg-base-300 text-gray-700">
//             <tr>
//               <th>Meal</th>
//               <th>User</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Address</th>
//               <th>Status</th>
//               <th>Payment</th>
//               <th className="text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order) => {
//               const { _id, mealName, quantity, price, userEmail, userAddress, orderStatus, paymentStatus } = order;

//               return (
//                 <tr key={_id}>
//                   <td>{mealName}</td>
//                   <td>{userEmail}</td>
//                   <td>{quantity}</td>
//                   <td>Tk. {price * quantity}</td>
//                   <td>{userAddress}</td>

//                   <td>
//                     <span
//                       className={`px-3 py-1 text-sm rounded-full ${
//                         orderStatus === "pending"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : orderStatus === "accepted"
//                           ? "bg-blue-100 text-blue-700"
//                           : orderStatus === "delivered"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {orderStatus}
//                     </span>
//                   </td>

//                   <td>{paymentStatus}</td>

//                   <td className="flex gap-2 justify-center">
//                     {/* Cancel */}
//                     <button
//                       disabled={orderStatus !== "pending"}
//                       onClick={() => handleStatusUpdate(_id, "cancelled")}
//                       className="btn btn-sm bg-red-500 text-white disabled:opacity-40"
//                     >
//                       Cancel
//                     </button>

//                     {/* Accept */}
//                     <button
//                       disabled={orderStatus !== "pending"}
//                       onClick={() => handleStatusUpdate(_id, "accepted")}
//                       className="btn btn-sm bg-green-600 text-white disabled:opacity-40"
//                     >
//                       Accept
//                     </button>

//                     {/* Deliver */}
//                     <button
//                       disabled={orderStatus !== "accepted"}
//                       onClick={() => handleStatusUpdate(_id, "delivered")}
//                       className="btn btn-sm bg-blue-600 text-white disabled:opacity-40"
//                     >
//                       Deliver
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}

//             {orders.length === 0 && (
//               <tr>
//                 <td colSpan="8" className="text-center py-6">
//                   No order requests found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderReq;
