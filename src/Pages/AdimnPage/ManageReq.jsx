import React from 'react';

const ManageReq = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
            <h2 className="text-[32px] font-bold mb-6">Manage Role Requests</h2>

            <div className="overflow-x-auto bg-base-100 rounded-2xl shadow">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-base-300">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Requested Role</th>
                            <th>Current Role</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {/* Pending Request */}
                        <tr>
                            <td>1</td>
                            <td>Rahim Uddin</td>
                            <td>rahim@gmail.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                                    Chef
                                </span>
                            </td>
                            <td>User</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                                    Pending
                                </span>
                            </td>
                            <td className="text-center space-x-2">
                                <button className="btn btn-sm bg-green-600 text-white">
                                    Accept
                                </button>
                                <button className="btn btn-sm bg-red-500 text-white">
                                    Reject
                                </button>
                            </td>
                        </tr>

                        {/* Approved Request */}
                        <tr>
                            <td>2</td>
                            <td>Nur-Ahad</td>
                            <td>nurahad@gmail.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                                    Admin
                                </span>
                            </td>
                            <td>Chef</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                    Approved
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-disabled">
                                    Completed
                                </button>
                            </td>
                        </tr>

                        {/* Rejected Request */}
                        <tr>
                            <td>3</td>
                            <td>Hasan Ali</td>
                            <td>hasan@gmail.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                                    Chef
                                </span>
                            </td>
                            <td>User</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                                    Rejected
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-disabled">
                                    Rejected
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageReq;