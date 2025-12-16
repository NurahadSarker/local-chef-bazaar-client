import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import avatar from '../../assets/user-avatar.png'
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from '../../Components/Loading'

const MyProfile = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/users/profile?email=${user.email}`)
                .then(res => setProfile(res.data));
        }
    }, [user, axiosSecure]);

    if (!profile) return <Loading></Loading>;

    const handleRoleRequest = (type) => {
        const requestBody = {
            userName: profile.displayName || user.displayName,
            userEmail: profile.email,
            requestType: type,
            requestStatus: "pending",
            requestTime: new Date().toISOString()
        };

        axiosSecure.post('/role-request', requestBody)
            .then(res => {
                console.log(res)
                alert("Request sent successfully to admin!");
            })
            .catch(err => {
                console.error(err);
                alert("Failed to send request");
            });
    };


    return (
        <div className="bg-base-100 max-w-4xl mx-auto my-15 shadow-lg p-10 rounded-2xl border border-[#FF6700]">
            <h1 className="text-[32px] font-bold mb-5">My Profile</h1>
            <div className="flex items-center gap-5 border-b-2 border-base-300 pb-7">
                <div className="w-30 bg-base-300 rounded-full h-30 shadow-md flex items-center justify-center border border-[#FF6700]">
                    <img className="w-full rounded-full" src={user?.photoURL || avatar} alt="Image" />
                </div>
                <div>
                    <h1 className="mb-2 text-[24px] font-bold">{user.displayName}</h1>
                    <p className="mb-2 text-[18px] font-semibold">{profile.email}</p>
                    <span className={`px-4 py-1 rounded-full text-white
            ${profile.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                        {profile.status}
                    </span>
                </div>
            </div>
            <h1 className="text-[20px] font-semibold mt-5 mb-5">Additional Information</h1>
            <div className="grid grid-cols-2 gap-15 border-b-2 border-base-300 pb-7">
                <div>
                    <h1 className="font-bold text-[18px] border-b-2 border-base-300">Address</h1>
                    <p className="font-medium">{profile.address || "Not provided"}</p>
                </div>
                <div>
                    <h1 className="font-bold text-[18px] border-b-2 border-base-300">Role</h1>
                    <p className="font-medium">{profile.role}</p>
                </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={() => handleRoleRequest("chef")}
                    disabled={profile.role === "chef" || profile.role === "admin"}
                    className="mr-7 bg-[#FF6700] px-10 py-3 rounded-2xl">Be a Chef</button>
                <button
                onClick={() => handleRoleRequest("admin")}
                disabled={
                    profile.role === "admin"
                } className="bg-[#089916] px-10 py-3 rounded-2xl">Be an Admin</button>
            </div>
        </div>
    );
};

export default MyProfile;


// import React from "react";
// import { Link } from "react-router";
// import avatar from '../../assets/user-avatar.png'
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Loading from '../../Components/Loading'
// import { useQuery } from '@tanstack/react-query';

// const MyProfile = () => {
//     const { user } = useAuth()
//     const axiosSecure = useAxiosSecure();

//     // ✅ TanStack Query v5 syntax
//     const { data: profile, isLoading, refetch } = useQuery({
//         queryKey: ['profile', user?.email],
//         queryFn: async () => {
//             if (!user?.email) return null;
//             const res = await axiosSecure.get(`/users/profile?email=${user.email}`);
//             return res.data;
//         },
//         enabled: !!user?.email,
//     });

//     if (isLoading || !profile) return <Loading></Loading>;

//     const handleRoleRequest = async (type) => {
//         const requestBody = {
//             userName: profile.displayName || user.displayName,
//             userEmail: profile.email,
//             requestType: type,
//             requestStatus: "pending",
//             requestTime: new Date().toISOString()
//         };

//         try {
//             await axiosSecure.post('/role-request', requestBody);
//             alert("Request sent successfully to admin!");
//             refetch(); // নতুন ডাটা নিয়ে আবার fetch করবে
//         } catch (err) {
//             console.error(err);
//             alert("Failed to send request");
//         }
//     };

//     return (
//         <div className="bg-base-100 max-w-4xl mx-auto my-15 shadow-lg p-10 rounded-2xl border border-[#FF6700]">
//             <h1 className="text-[32px] font-bold mb-5">My Profile</h1>
//             <div className="flex items-center gap-5 border-b-2 border-base-300 pb-7">
//                 <div className="w-30 bg-base-300 rounded-full h-30 shadow-md flex items-center justify-center border border-[#FF6700]">
//                     <img className="w-full rounded-full" src={user?.photoURL || avatar} alt="Image" />
//                 </div>
//                 <div>
//                     <h1 className="mb-2 text-[24px] font-bold">{user.displayName}</h1>
//                     <p className="mb-2 text-[18px] font-semibold">{profile.email}</p>
//                     <span className={`px-4 py-1 rounded-full text-white
//             ${profile.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
//                         {profile.status}
//                     </span>
//                 </div>
//             </div>
//             <h1 className="text-[20px] font-semibold mt-5 mb-5">Additional Information</h1>
//             <div className="grid grid-cols-2 gap-15 border-b-2 border-base-300 pb-7">
//                 <div>
//                     <h1 className="font-bold text-[18px] border-b-2 border-base-300">Address</h1>
//                     <p className="font-medium">{profile.address || "Not provided"}</p>
//                 </div>
//                 <div>
//                     <h1 className="font-bold text-[18px] border-b-2 border-base-300">Role</h1>
//                     <p className="font-medium">{profile.role}</p>
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <button
//                     onClick={() => handleRoleRequest("chef")}
//                     disabled={profile.role === "chef" || profile.role === "admin"}
//                     className="mr-7 bg-[#FF6700] px-10 py-3 rounded-2xl">Be a Chef</button>
//                 <button
//                     onClick={() => handleRoleRequest("admin")}
//                     disabled={profile.role === "admin"}
//                     className="bg-[#089916] px-10 py-3 rounded-2xl">Be an Admin</button>
//             </div>
//         </div>
//     );
// };

// export default MyProfile;

