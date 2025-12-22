// import React from 'react';

// const ManageUsers = () => {
//     return (
//         <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
//             <h2 className="text-[32px] font-bold mb-6">Manage Users</h2>

//             <div className="overflow-x-auto bg-base-100 rounded-2xl">
//                 <table className="table w-full">
//                     {/* Table Head */}
//                     <thead className="bg-base-300">
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Status</th>
//                             <th className="text-center">Action</th>
//                         </tr>
//                     </thead>

//                     {/* Table Body */}
//                     <tbody>
//                         {/* Normal User */}
//                         <tr>
//                             <td>1</td>
//                             <td>Rahim Uddin</td>
//                             <td>rahim@gmail.com</td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
//                                     User
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
//                                     Active
//                                 </span>
//                             </td>
//                             <td className="text-center">
//                                 <button className="btn btn-sm bg-red-500 text-white">
//                                     Make Fraud
//                                 </button>
//                             </td>
//                         </tr>

//                         {/* Chef */}
//                         <tr>
//                             <td>2</td>
//                             <td>Nur-Ahad</td>
//                             <td>chef@food.com</td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
//                                     Chef
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
//                                     Active
//                                 </span>
//                             </td>
//                             <td className="text-center">
//                                 <button className="btn btn-sm bg-red-500 text-white">
//                                     Make Fraud
//                                 </button>
//                             </td>
//                         </tr>

//                         {/* Fraud User */}
//                         <tr>
//                             <td>3</td>
//                             <td>Hasan Ali</td>
//                             <td>hasan@gmail.com</td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
//                                     User
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
//                                     Fraud
//                                 </span>
//                             </td>
//                             <td className="text-center">
//                                 <button className="btn btn-sm btn-disabled">
//                                     Fraud
//                                 </button>
//                             </td>
//                         </tr>

//                         {/* Admin */}
//                         <tr>
//                             <td>4</td>
//                             <td>Admin</td>
//                             <td>admin@platform.com</td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-black text-white">
//                                     Admin
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
//                                     Active
//                                 </span>
//                             </td>
//                             <td className="text-center">
//                                 <button className="btn btn-sm btn-disabled">
//                                     Protected
//                                 </button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageUsers;


import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  /* ===== FETCH USERS ===== */
  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  /* ===== MAKE FRAUD ===== */
  const handleMakeFraud = async (id) => {
    const res = await axiosSecure.patch(`/users/fraud/${id}`);

    if (res.data.modifiedCount > 0) {
      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, status: "fraud" } : user
        )
      );
    }
  };

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
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email}</td>

                {/* ROLE */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                      ${user.role === "admin" && "bg-black text-white"}
                      ${user.role === "chef" && "bg-purple-100 text-purple-700"}
                      ${user.role === "user" && "bg-blue-100 text-blue-700"}
                    `}
                  >
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                      ${user.status === "active" && "bg-green-100 text-green-700"}
                      ${user.status === "fraud" && "bg-red-100 text-red-700"}
                    `}
                  >
                    {user.status}
                  </span>
                </td>

                {/* ACTION */}
                <td className="text-center">
                  {user.role === "admin" ? (
                    <button className="btn btn-sm btn-disabled">
                      Protected
                    </button>
                  ) : user.status === "fraud" ? (
                    <button className="btn btn-sm btn-disabled">
                      Fraud
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeFraud(user._id)}
                      className="btn btn-sm bg-red-500 text-white"
                    >
                      Make Fraud
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center py-10 text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
