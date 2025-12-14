import React from 'react';
import { Link } from 'react-router';

const MyReviews = () => {
    return (
        <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-3">My Reviews</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Meals Name</th>
                            <th>Rating</th>
                            <th>Comment</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Chicken Biriani</td>
                            <td>4.8</td>
                            <td>This is good</td>
                            <td>11-12-2025</td>
                            <td>
                                <Link className='bg-red-500 px-4 py-2 rounded-md w-10 mr-2'>Delete</Link>
                                <Link className='bg-green-500 px-4 py-2 rounded-md w-10'>Update</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;