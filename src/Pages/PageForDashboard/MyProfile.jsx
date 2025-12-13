import React from "react";
import { Link } from "react-router";

const MyProfile = () => {

    return (
        <div className="bg-base-100 max-w-4xl mx-auto shadow-lg p-10 rounded-2xl border border-[#FF6700]">
            <h1 className="text-[32px] font-bold mb-5">My Profile</h1>
            <div className="flex items-center gap-5 border-b-2 border-base-300 pb-7">
                <div className="w-30 bg-base-300 rounded-full h-30 shadow-md flex items-center justify-center border border-[#FF6700]">
                    <h1>Image</h1>
                </div>
                <div>
                    <h1 className="mb-2 text-[24px] font-bold">Md. Nur-Ahad Robi</h1>
                    <p className="mb-2 text-[18px] font-semibold">Email: nurahadrobi@gmail.com</p>
                    <div className="bg-green-400 px-4 inline-block rounded-full">
                        <p>Active</p>
                    </div>
                </div>
            </div>
            <h1 className="text-[20px] font-semibold mt-5 mb-5">Additional Information</h1>
            <div className="grid grid-cols-2 gap-15 border-b-2 border-base-300 pb-7">
                <div>
                    <h1 className="font-bold text-[18px] border-b-2 border-base-300">Address</h1>
                    <p className="font-medium">Marirhat, palashbari, gaibandha</p>
                </div>
                <div>
                    <h1 className="font-bold text-[18px] border-b-2 border-base-300">Role</h1>
                    <p className="font-medium">User</p>
                </div>
            </div>
            <div className="mt-6">
                <Link className="mr-7 bg-[#FF6700] px-10 py-3 rounded-2xl">Be a Chef</Link>
                <Link className="bg-[#089916] px-10 py-3 rounded-2xl">Be an Admin</Link>
            </div>
        </div>
    );
};

export default MyProfile;
