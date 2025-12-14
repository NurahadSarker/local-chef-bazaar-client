import React from "react";
import Img from "../../assets/chickenbiriani.jpg";

const MyMeals = () => {
    // Dummy meals data
    const meals = [
        {
            id: 1,
            name: "Chicken Biriyani",
            price: 250,
            deliveryTime: "30–40 mins",
            experience: "4+ Years",
            ingredients: "Rice, Chicken, Spices",
        },
        {
            id: 2,
            name: "Beef Tehari",
            price: 280,
            deliveryTime: "35–45 mins",
            experience: "4+ Years",
            ingredients: "Rice, Beef, Special Masala",
        },
    ];

    return (
        <div className="p-15 bg-base-100">
            <h2 className="text-[32px] font-bold mb-6">My Meals</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal) => (
                    <div
                        key={meal.id}
                        className="bg-base-100 rounded-2xl shadow-lg overflow-hidden border border-[#FF6700]"
                    >
                        {/* Image */}
                        <img
                            src={Img}
                            alt={meal.name}
                            className="h-48 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-4 space-y-2">
                            <h3 className='text-xl font-semibold'>{meal.name}</h3>

                            <p className="text-sm text-gray-500">
                                Ingredients: {meal.ingredients}
                            </p>

                            <div className="text-sm text-gray-600 space-y-1">
                                <p>
                                    <b>Price:</b> Tk. {meal.price}
                                </p>
                                <p>
                                    <b>Delivery:</b> {meal.deliveryTime}
                                </p>
                                <p>
                                    <b>Chef Exp:</b> {meal.experience}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-4">
                                <button className="flex-1 py-2 rounded-lg bg-green-500 text-sm font-semibold">
                                    Update
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-500  text-white text-sm font-semibold">
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
