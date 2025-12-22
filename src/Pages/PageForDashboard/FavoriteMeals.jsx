import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const FavoriteMeals = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [favorites, setFavorites] = useState([]);

    // Fetch favorite meals
    useEffect(() => {
        if (!user?.email) return;

        axiosSecure
            .get(`/favorites/user/${user.email}`)
            .then(res => setFavorites(res.data))
            .catch(err => console.error(err));
    }, [user, axiosSecure]);

    // Delete favorite
    const handleDelete = async (id) => {
        if (!window.confirm("Remove from favorites?")) return;

        try {
            const res = await axiosSecure.delete(`/favorites/${id}`);
            if (res.data.deletedCount > 0) {
                setFavorites(favorites.filter(f => f._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-3">Favorite Meals</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Meals Name</th>
                            <th>Chef Name</th>
                            <th>Price</th>
                            <th>Date added</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {favorites.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center text-gray-500">
                                    No favorite meals found
                                </td>
                            </tr>
                        )}

                        {favorites.map(fav => (
                            <tr key={fav._id}>
                                <td>{fav.mealName}</td>
                                <td>{fav.chefName}</td>
                                <td>${fav.price}</td>
                                <td>
                                    {new Date(fav.addedTime).toLocaleDateString()}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(fav._id)}
                                        className="bg-red-500 px-4 py-2 rounded-md text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavoriteMeals;
