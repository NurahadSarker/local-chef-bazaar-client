import React from 'react';

const ChefDashboardOverview = () => {
    return (
        <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Chef Dashboard
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">My Meals</p>
          <h3 className="text-2xl font-bold mt-2">8</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Order Requests</p>
          <h3 className="text-2xl font-bold mt-2">4</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Delivered Orders</p>
          <h3 className="text-2xl font-bold mt-2">21</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Earnings</p>
          <h3 className="text-2xl font-bold mt-2">৳ 12,500</h3>
        </div>
      </div>
    </div>
    );
};

export default ChefDashboardOverview;