import React from 'react';
import { Link } from 'react-router';

const MyOrders = () => {
    return (
        <div className="bg-base-100 max-w-6xl mx-auto shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-3">My Orders</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Meals Name</th>
                            <th>Chef Name</th>
                            <th>Chef ID</th>
                            <th>Delivery Time</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Chicken Biriani</td>
                            <td>Nurahad</td>
                            <td>Ch-001</td>
                            <td>11-12-2025</td>
                            <td>02</td>
                            <td>$1000</td>
                            <td>Accepted</td>
                            <td>Pending</td>
                            <td>
                                <Link className='bg-green-500 px-4 py-2 rounded-md w-10'>Pay Now</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;