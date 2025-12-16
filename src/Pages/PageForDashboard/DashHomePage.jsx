import React, { useEffect, useState } from 'react';
import UserDashboardOverview from './UserDashboarOverview';
import ChefDashboardOverview from './ChefDashboardOverview';
import AdminDashboardOverview from './AdminDashboardOverview';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Components/Loading';

const DashHomePage = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true);
        axiosSecure.get(`/users/profile?email=${user.email}`)
            .then(res => {
                setProfile(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [user, axiosSecure]);

    if (loading || !profile) return <Loading />;

    const role = profile.role;
    return (
        <div>
            {role === "user" && <UserDashboardOverview />}
            {role === "chef" && <ChefDashboardOverview />}
            {role === "admin" && <AdminDashboardOverview />}

        </div>
    );
};

export default DashHomePage;