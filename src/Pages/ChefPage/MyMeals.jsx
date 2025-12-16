import React, { useEffect, useState } from "react";
import Img from "../../assets/chickenbiriani.jpg";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyMeals = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [meals, setMeals] = useState([]);

    /* ===== FETCH DATA ===== */
    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/meals/chef/${user.email}`)
                .then(res => setMeals(res.data));
        }
    }, [user, axiosSecure]);

    /* ===== DELETE ===== */
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Delete this meal?");
        if (!confirmDelete) return;

        const res = await axiosSecure.delete(`/meals/${id}`);
        if (res.data.deletedCount > 0) {
            setMeals(meals.filter(meal => meal._id !== id));
        }
    };

    /* ===== UPDATE ===== */
    const handleUpdate = async (meal) => {
        const newPrice = prompt("Enter new price", meal.price);
        if (!newPrice) return;

        const res = await axiosSecure.patch(`/meals/${meal._id}`, {
            price: parseFloat(newPrice),
        });

        if (res.data.modifiedCount > 0) {
            setMeals(
                meals.map(m =>
                    m._id === meal._id ? { ...m, price: newPrice } : m
                )
            );
        }
    };

    return (
        <div className="p-15 bg-base-100">
            <h2 className="text-[32px] font-bold mb-6">My Meals</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal) => (
                    <div
                        key={meal._id}
                        className="bg-base-100 rounded-2xl shadow-lg overflow-hidden border border-[#FF6700]"
                    >
                        {/* Food Image */}
                        <img
                            src={meal.image || Img}
                            alt={meal.foodName}
                            className="h-48 w-full object-cover"
                        />

                        <div className="p-4 space-y-2">
                            {/* Food Name */}
                            <h3 className="text-xl font-semibold">
                                {meal.foodName}
                            </h3>

                            {/* Rating */}
                            <p className="text-sm">
                                ⭐ Rating: {meal.rating || 0}/5
                            </p>

                            {/* Ingredients */}
                            <p className="text-sm text-gray-500">
                                <b>Ingredients:</b> {meal.ingredients}
                            </p>

                            <div className="text-sm text-gray-600 space-y-1">
                                <p><b>Price:</b> Tk. {meal.price}</p>
                                <p><b>Delivery Time:</b> {meal.deliveryTime}</p>
                                <p><b>Chef Name:</b> {meal.chefName}</p>
                                <p><b>Chef ID:</b> {meal.chefId}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={() => handleUpdate(meal)}
                                    className="flex-1 py-2 rounded-lg bg-green-500 text-white text-sm font-semibold"
                                >
                                    Update
                                </button>

                                <button
                                    onClick={() => handleDelete(meal._id)}
                                    className="flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyMeals;
