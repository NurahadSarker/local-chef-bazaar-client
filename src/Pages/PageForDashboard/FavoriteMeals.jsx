import React from 'react';
import { Link } from 'react-router';

const FavoriteMeals = () => {
    return (
        <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-3">Favorite Meals</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Meals Name</th>
                            <th>Chef Name</th>
                            <th>Price</th>
                            <th>Date added</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Chicken Biriani</td>
                            <td>Nur Ahad</td>
                            <td>$500</td>
                            <td>11-12-2025</td>
                            <td>
                                <Link className='bg-red-500 px-4 py-2 rounded-md w-10'>Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavoriteMeals;