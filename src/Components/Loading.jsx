import React, { useEffect } from 'react';

const Loading = () => {
    useEffect(() => {
            const savedTheme = localStorage.getItem("theme") || "light";
            document.querySelector("html").setAttribute("data-theme", savedTheme);
        }, []);
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <span className="loading loading-dots loading-xl bg-[#FF6700]"></span>
        </div>
    );
};

export default Loading;