import React from 'react';

const ManageUsers = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
            <h2 className="text-[32px] font-bold mb-6">Manage Users</h2>

            <div className="overflow-x-auto bg-base-100 rounded-2xl">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-base-300">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {/* Normal User */}
                        <tr>
                            <td>1</td>
                            <td>Rahim Uddin</td>
                            <td>rahim@gmail.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                                    User
                                </span>
                            </td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                    Active
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm bg-red-500 text-white">
                                    Make Fraud
                                </button>
                            </td>
                        </tr>

                        {/* Chef */}
                        <tr>
                            <td>2</td>
                            <td>Nur-Ahad</td>
                            <td>chef@food.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                                    Chef
                                </span>
                            </td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                    Active
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm bg-red-500 text-white">
                                    Make Fraud
                                </button>
                            </td>
                        </tr>

                        {/* Fraud User */}
                        <tr>
                            <td>3</td>
                            <td>Hasan Ali</td>
                            <td>hasan@gmail.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                                    User
                                </span>
                            </td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                                    Fraud
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-disabled">
                                    Fraud
                                </button>
                            </td>
                        </tr>

                        {/* Admin */}
                        <tr>
                            <td>4</td>
                            <td>Admin</td>
                            <td>admin@platform.com</td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-black text-white">
                                    Admin
                                </span>
                            </td>
                            <td>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                    Active
                                </span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-disabled">
                                    Protected
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;