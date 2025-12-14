import React from 'react';
import UserDashboardOverview from './UserDashboarOverview';
import ChefDashboardOverview from './ChefDashboardOverview';
import AdminDashboardOverview from './AdminDashboardOverview';

const DashHomePage = () => {
    const role = "user"
    // const role= "chef"
    // const role = "admin"
    return (
        <div>
            {role === "user" && <UserDashboardOverview />}
            {role === "chef" && <ChefDashboardOverview />}
            {role === "admin" && <AdminDashboardOverview />}

        </div>
    );
};

export default DashHomePage;