import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyOrders = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    /* ===== FETCH USER ORDERS ===== */
    useEffect(() => {
        if (!user?.email) return;

        axiosSecure
            .get(`/orders/user/${user.email}`)
            .then(res => {
                setOrders(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Order fetch error:", err);
                setLoading(false);
            });
    }, [user, axiosSecure]);

    if (loading) {
        return <p className="text-center mt-10">Loading your orders...</p>;
    }

    const handlePayment = async (order) => {
        alert(`Payment successful for ${order.mealName}`);

        await axiosSecure.patch(`/orders/payment/${order._id}`, {
            paymentStatus: "paid"
        });

        setOrders(prev =>
            prev.map(o =>
                o._id === order._id
                    ? { ...o, paymentStatus: "paid" }
                    : o
            )
        );
    };


    return (
        <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-5">My Orders</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Meal Name</th>
                            <th>Chef Name</th>
                            <th>Chef ID</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order.mealName}</td>
                                    <td>{order.chefName || "—"}</td>
                                    <td>{order.chefId}</td>
                                    <td>{order.quantity}</td>
                                    <td>Tk. {order.totalPrice}</td>

                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-sm
                                            ${order.orderStatus === "pending" && "bg-yellow-100 text-yellow-700"}
                                            ${order.orderStatus === "accepted" && "bg-blue-100 text-blue-700"}
                                            ${order.orderStatus === "delivered" && "bg-green-100 text-green-700"}
                                            ${order.orderStatus === "cancelled" && "bg-red-100 text-red-700"}
                                        `}>
                                            {order.orderStatus}
                                        </span>
                                    </td>

                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-sm
                                            ${order.paymentStatus === "pending" && "bg-orange-100 text-orange-700"}
                                            ${order.paymentStatus === "paid" && "bg-green-100 text-green-700"}
                                        `}>
                                            {order.paymentStatus}
                                        </span>
                                    </td>

                                    <td>
                                        {order.orderStatus === "accepted" && order.paymentStatus === "pending" && (
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                                                onClick={() => handlePayment(order)}
                                            >
                                                Pay Now
                                            </button>
                                        )}

                                        {order.paymentStatus === "paid" && (
                                            <span className="text-green-600 font-semibold">Paid</span>
                                        )}
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-10 text-gray-500">
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

export default MyOrders;
