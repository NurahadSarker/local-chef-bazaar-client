import React from 'react';

const UserDashboarOverview = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
                Welcome back
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-base-100 p-5 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">My Orders</p>
                    <h3 className="text-2xl font-bold mt-2">12</h3>
                </div>
                <div className="bg-base-100 p-5 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Pending Orders</p>
                    <h3 className="text-2xl font-bold mt-2">3</h3>
                </div>
                <div className="bg-base-100 p-5 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Delivered</p>
                    <h3 className="text-2xl font-bold mt-2">9</h3>
                </div>
                <div className="bg-base-100 p-5 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Favorite Meals</p>
                    <h3 className="text-2xl font-bold mt-2">5</h3>
                </div>
            </div>
        </div>
    );
};

export default UserDashboarOverview;