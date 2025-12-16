import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageReq = () => {
    const axiosSecure = useAxiosSecure();
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axiosSecure.get('/role-request')
            .then(res => setRequests(res.data));
    }, [axiosSecure]);

    const handleAccept = (req) => {
        axiosSecure.patch(`/role-request/approve/${req._id}`, {
            email: req.userEmail,
            role: req.requestType
        })
            .then(() => {
                setRequests(prev =>
                    prev.map(r =>
                        r._id === req._id
                            ? { ...r, requestStatus: "approved" }
                            : r
                    )
                );
            });
    };

    const handleReject = (id) => {
        axiosSecure.patch(`/role-request/reject/${id}`)
            .then(() => {
                setRequests(prev =>
                    prev.map(r =>
                        r._id === id
                            ? { ...r, requestStatus: "rejected" }
                            : r
                    )
                );
            });
    };
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
                        {requests.map((req, index) => (
                            <tr key={req._id}>
                                <td>{index + 1}</td>
                                <td>{req.userName}</td>
                                <td>{req.userEmail}</td>

                                <td>
                                    <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                                        {req.requestType}
                                    </span>
                                </td>

                                <td>{req.currentRole || "User"}</td>

                                <td>
                                    {req.requestStatus === "pending" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                                            Pending
                                        </span>
                                    )}
                                    {req.requestStatus === "approved" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                            Approved
                                        </span>
                                    )}
                                    {req.requestStatus === "rejected" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                                            Rejected
                                        </span>
                                    )}
                                </td>

                                <td className="text-center space-x-2">
                                    {req.requestStatus === "pending" ? (
                                        <>
                                            <button
                                                onClick={() => handleAccept(req)}
                                                className="btn btn-sm bg-green-600 text-white"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => handleReject(req._id)}
                                                className="btn btn-sm bg-red-500 text-white"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    ) : (
                                        <button className="btn btn-sm btn-disabled">
                                            Completed
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageReq;