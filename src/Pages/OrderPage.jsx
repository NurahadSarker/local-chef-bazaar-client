// import React from "react";

// const OrderPage = () => {
//     return (
//         // <div className="min-h-screen bg-gray-50 w-full flex justify-center py-10 px-4">
//         //     <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">
//         //         <h1 className="text-3xl font-bold text-gray-800 mb-6">Confirm Your Order</h1>

//         //         {/* Product Info */}
//         //         <div className="border rounded-xl p-4 mb-6 bg-gray-100">
//         //             <h2 className="text-xl font-semibold text-gray-700">Product Information</h2>
//         //             <p className="text-gray-600 mt-2">Product: <strong>Chicken Biriyani</strong></p>
//         //             <p className="text-gray-600">Price: <strong>$15</strong></p>
//         //             <p className="text-gray-600">Delivery Time: <strong>30-40 minutes</strong></p>
//         //         </div>

//         //         {/* Customer Info */}
//         //         <div className="border rounded-xl p-4 mb-6">
//         //             <h2 className="text-xl font-semibold text-gray-700">Customer Information</h2>
//         //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         //                 <input
//         //                     type="text"
//         //                     placeholder="Full Name"
//         //                     className="border p-3 rounded-lg w-full"
//         //                 />
//         //                 <input
//         //                     type="text"
//         //                     placeholder="Phone Number"
//         //                     className="border p-3 rounded-lg w-full"
//         //                 />
//         //                 <input
//         //                     type="email"
//         //                     placeholder="Email Address"
//         //                     className="border p-3 rounded-lg w-full"
//         //                 />
//         //                 <input
//         //                     type="text"
//         //                     placeholder="Delivery Address"
//         //                     className="border p-3 rounded-lg w-full md:col-span-2"
//         //                 />
//         //             </div>
//         //         </div>

//         //         {/* Payment Section */}
//         //         <div className="border rounded-xl p-4 mb-6">
//         //             <h2 className="text-xl font-semibold text-gray-700">Payment Method</h2>
//         //             <div className="mt-4 space-y-2">
//         //                 <label className="flex items-center gap-3">
//         //                     <input type="radio" name="payment" /> Cash on Delivery
//         //                 </label>
//         //                 <label className="flex items-center gap-3">
//         //                     <input type="radio" name="payment" /> Online Payment (Bkash / Nagad)
//         //                 </label>
//         //             </div>
//         //         </div>

//         //         {/* Place Order Button */}
//         //         <button className="w-full bg-green-600 text-white py-3 rounded-xl text-xl font-semibold hover:bg-green-700 transition">
//         //             Place Order
//         //         </button>
//         //     </div>
//         // </div>
//         <div className="max-w-5xl mx-auto p-5 bg-base-100 rounded-2xl my-15">
//             <h1 className="text-center text-[32px] font-bold mb-2">Place Your Order</h1>
//             <div>

//             </div>
//         </div>
//     );
// };

// export default OrderPage;


// import React, { useState } from "react";
// import axios from "axios";

// const OrderPage = ({ meal, user }) => {
//     const [quantity, setQuantity] = useState(1);
//     const [address, setAddress] = useState("");

//     const handlePlaceOrder = async () => {
//         if (!address) {
//             alert("Please enter your delivery address.");
//             return;
//         }

//         const orderData = {
//             mealName: meal.mealName,
//             price: meal.price,
//             quantity,
//             chefId: meal.chefId,
//             userEmail: user.email,
//             userAddress: address,
//             orderStatus: "pending",
//             orderTime: new Date().toISOString(),
//             totalAmount: meal.price * quantity,
//         };

//         try {
//             const response = await axios.post("http://localhost:5000/orders", orderData);
//             if (response.data.insertedId) {
//                 alert("Order placed successfully!");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Something went wrong while placing the order.");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 w-full flex justify-center py-10 px-4">
//             <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                     Order Page
//                 </h1>

//                 {/* Product Info */}
//                 <div className="border rounded-xl p-4 mb-6 bg-gray-100">
//                     <h2 className="text-xl font-semibold text-gray-700">{meal.mealName}</h2>

//                     {/* Meal Name */}
//                     <label className="block mt-4 font-medium">Meal Name</label>
//                     <input
//                         type="text"
//                         value={meal.mealName}
//                         readOnly
//                         className="border p-3 rounded-lg w-full bg-gray-200"
//                     />

//                     {/* Price & Chef ID */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                         <div>
//                             <label className="font-medium">Price</label>
//                             <input
//                                 type="text"
//                                 value={`$${meal.price}`}
//                                 readOnly
//                                 className="border p-3 rounded-lg w-full bg-gray-200"
//                             />
//                         </div>
//                         <div>
//                             <label className="font-medium">Chef ID</label>
//                             <input
//                                 type="text"
//                                 value={meal.chefId}
//                                 readOnly
//                                 className="border p-3 rounded-lg w-full bg-gray-200"
//                             />
//                         </div>
//                     </div>

//                     {/* User Email */}
//                     <label className="block mt-4 font-medium">User Email</label>
//                     <input
//                         type="email"
//                         value={user.email}
//                         readOnly
//                         className="border p-3 rounded-lg w-full bg-gray-200"
//                     />

//                     {/* Quantity */}
//                     <label className="block mt-4 font-medium">Quantity</label>
//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//                             className="px-4 py-2 bg-gray-300 rounded-lg text-lg"
//                         >
//                             -
//                         </button>

//                         <input
//                             type="number"
//                             value={quantity}
//                             readOnly
//                             className="border p-3 rounded-lg w-20 text-center bg-gray-200"
//                         />

//                         <button
//                             onClick={() => setQuantity(quantity + 1)}
//                             className="px-4 py-2 bg-gray-300 rounded-lg text-lg"
//                         >
//                             +
//                         </button>
//                     </div>

//                     {/* Address */}
//                     <label className="block mt-4 font-medium">Delivery Address</label>
//                     <textarea
//                         placeholder="Enter delivery address"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         className="border p-3 rounded-lg w-full"
//                     />
//                 </div>

//                 {/* Order Summary */}
//                 <div className="border rounded-xl p-4 mb-6">
//                     <h2 className="text-xl font-semibold text-gray-700">Order Summary</h2>
//                     <div className="mt-3 space-y-2">
//                         <p>Meal: <strong>{meal.mealName}</strong></p>
//                         <p>Price: <strong>${meal.price}</strong></p>
//                         <p>Quantity: <strong>{quantity}</strong></p>
//                         <p className="text-lg">
//                             Total: <strong>${meal.price * quantity}</strong>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Place Order Button */}
//                 <button
//                     onClick={handlePlaceOrder}
//                     className="w-full bg-green-600 text-white py-3 rounded-xl text-xl font-semibold hover:bg-green-700 transition"
//                 >
//                     Place Order
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default OrderPage;



// import React, { useState } from "react";

// const OrderPage = () => {
//     const [quantity, setQuantity] = useState(1);

//     // Auto-filled Dummy Data
//     const mealName = "Chicken Biryani";
//     const price = 500;
//     const chefId = "C001";
//     const userEmail = "user@example.com";

//     return (
//         <div className="max-w-5xl mx-auto py-15 ">
//             <div className="bg-base-100 shadow-md rounded-xl border border-gray-400 py-10">
//                 <h1 className="text-center text-[32px] font-bold mb-5">Order Page</h1>

//                 <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
//                     <div>
//                         <label className="font-semibold block mb-1">Meal Name</label>
//                         <input
//                             type="text"
//                             value={mealName}
//                             readOnly
//                             className="border w-full px-3 py-2 rounded-md mb-4 bg-base-300"
//                         />
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="font-semibold block mb-1">Price</label>
//                                 <input
//                                     type="text"
//                                     value={`$${price}`}
//                                     readOnly
//                                     className="border w-full px-3 py-2 rounded-md bg-base-300"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="font-semibold block mb-1">Chef ID</label>
//                                 <input
//                                     type="text"
//                                     value={chefId}
//                                     readOnly
//                                     className="border w-full px-3 py-2 rounded-md bg-base-300"
//                                 />
//                             </div>
//                         </div>
//                         <label className="font-semibold block mt-4 mb-1">User Email</label>
//                         <input
//                             type="email"
//                             value={userEmail}
//                             readOnly
//                             className="border w-full px-3 py-2 rounded-md mb-4 bg-base-300"
//                         />
//                         <label className="font-semibold block mb-1">User Address</label>
//                         <input
//                             type="text"
//                             placeholder="Enter delivery address"
//                             className="border w-full px-3 py-2 rounded-md mb-4"
//                         />
//                         <label className="font-semibold block mb-1">Quantity</label>
//                         <input
//                             type="number"
//                             min="1"
//                             className="border w-full px-4 py-2 rounded-md mb-4"
//                             value={quantity}
//                             onChange={(e) => setQuantity(e.target.value)}
//                         />
//                         <button className="w-full button2 text-content py-3 rounded-md mt-3">
//                             Confirm Order
//                         </button>
//                     </div>
//                     <div className="bg-base-300 p-6 rounded-xl border">
//                         <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

//                         <div className="space-y-3 text-lg">
//                             <div className="flex justify-between">
//                                 <span className="font-medium">Meal</span>
//                                 <span>{mealName}</span>
//                             </div>

//                             <div className="flex justify-between">
//                                 <span className="font-medium">Price</span>
//                                 <span>${price}</span>
//                             </div>

//                             <div className="flex justify-between">
//                                 <span className="font-medium">Quantity</span>
//                                 <span>{quantity}</span>
//                             </div>

//                             <hr className="my-3" />

//                             <div className="flex justify-between font-bold text-xl">
//                                 <span>Total</span>
//                                 <span>${price * quantity}</span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderPage;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const OrderPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const axiosSecure = useAxiosSecure();

    const meal = state?.meal;
    const user = { email: "user@example.com" }; // later authContext থেকে আসবে

    if (!meal) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-red-500">
                    No meal selected!
                </h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-5 py-2 bg-[#FF6700] text-white rounded-md"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState("");

    // 🔥 Confirm Order Logic (Axios)
    const handleConfirmOrder = async () => {
        const orderData = {
            mealId: meal._id,
            mealName: meal.foodName,
            price: Number(meal.price),
            quantity,
            totalPrice: Number(meal.price) * quantity,

            chefId: meal.chefId,
            chefEmail: meal.chefEmail,

            userEmail: user.email,
            deliveryAddress: address,
        };

        try {
            const res = await axiosSecure.post("/orders", orderData);

            if (res.data.insertedId) {
                alert("✅ Order placed successfully!");
                navigate("/meals");
            }
        } catch (error) {
            console.error(error);
            alert("❌ Failed to place order");
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-15">
            <div className="bg-base-100 shadow-md rounded-xl border border-gray-400 py-10">
                <h1 className="text-center text-[32px] font-bold mb-5">
                    Order Page
                </h1>

                <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Form */}
                    <div>
                        <label className="font-semibold block mb-1">Meal Name</label>
                        <input
                            type="text"
                            value={meal.foodName}
                            readOnly
                            className="border w-full px-3 py-2 rounded-md mb-4 bg-base-300"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold block mb-1">Price</label>
                                <input
                                    type="text"
                                    value={`Tk. ${meal.price}`}
                                    readOnly
                                    className="border w-full px-3 py-2 rounded-md bg-base-300"
                                />
                            </div>

                            <div>
                                <label className="font-semibold block mb-1">Chef ID</label>
                                <input
                                    type="text"
                                    value={meal.chefId}
                                    readOnly
                                    className="border w-full px-3 py-2 rounded-md bg-base-300"
                                />
                            </div>
                        </div>

                        <label className="font-semibold block mt-4 mb-1">Chef Email</label>
                        <input
                            type="email"
                            value={meal.chefEmail}
                            readOnly
                            className="border w-full px-3 py-2 rounded-md mb-4 bg-base-300"
                        />

                        <label className="font-semibold block mb-1">Delivery Address</label>
                        <input
                            type="text"
                            placeholder="Enter delivery address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border w-full px-3 py-2 rounded-md mb-4"
                        />

                        <label className="font-semibold block mb-1">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="border w-full px-4 py-2 rounded-md mb-4"
                        />

                        <button
                            onClick={handleConfirmOrder}
                            className="w-full bg-[#FF6700] hover:bg-[#f06000] text-white py-3 rounded-md mt-3 font-semibold"
                        >
                            Confirm Order
                        </button>
                    </div>

                    {/* Right Summary */}
                    <div className="bg-base-300 p-6 rounded-xl border">
                        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                        <div className="space-y-3 text-lg">
                            <div className="flex justify-between">
                                <span className="font-medium">Meal</span>
                                <span>{meal.foodName}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Price</span>
                                <span>Tk. {meal.price}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Quantity</span>
                                <span>{quantity}</span>
                            </div>

                            <hr className="my-3" />

                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>Tk. {meal.price * quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;

