import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const PlatformStatistics = () => {
    // Dummy data (UI only)
    const orderData = [
        { name: "Pending", value: 35 },
        { name: "Delivered", value: 120 },
    ];

    const revenueData = [
        { name: "Jan", revenue: 12000 },
        { name: "Feb", revenue: 18000 },
        { name: "Mar", revenue: 15000 },
        { name: "Apr", revenue: 22000 },
    ];

    const COLORS = ["#FF9800", "#4CAF50"];

    return (
        <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
            <h2 className="text-[32px] font-bold mb-8">Platform Statistics</h2>

            {/* ----- Stats Cards ----- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <p className="text-sm text-gray-500">Total Payment</p>
                    <h3 className="text-2xl font-bold mt-2">৳ 3,25,000</h3>
                </div>

                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <p className="text-sm text-gray-500">Total Users</p>
                    <h3 className="text-2xl font-bold mt-2">540</h3>
                </div>

                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <p className="text-sm text-gray-500">Orders Pending</p>
                    <h3 className="text-2xl font-bold mt-2 text-orange-500">35</h3>
                </div>

                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <p className="text-sm text-gray-500">Orders Delivered</p>
                    <h3 className="text-2xl font-bold mt-2 text-green-600">120</h3>
                </div>
            </div>

            {/* ----- Charts Section ----- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Revenue Bar Chart */}
                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <h3 className="font-semibold mb-4">Monthly Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={revenueData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="revenue" fill="#7C3AED" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Order Status Pie Chart */}
                <div className="bg-base-200 p-6 rounded-2xl shadow">
                    <h3 className="font-semibold mb-4">Order Status</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={orderData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {orderData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default PlatformStatistics;
