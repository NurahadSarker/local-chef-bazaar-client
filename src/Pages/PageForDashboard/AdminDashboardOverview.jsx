import React from 'react';

const AdminDashboardOverview = () => {
    return (
        <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h3 className="text-2xl font-bold mt-2">320</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold mt-2">1,240</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Payments</p>
          <h3 className="text-2xl font-bold mt-2">৳ 8,90,000</h3>
        </div>
        <div className="bg-base-100 p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Pending Requests</p>
          <h3 className="text-2xl font-bold mt-2">7</h3>
        </div>
      </div>
    </div>
    );
};

export default AdminDashboardOverview;