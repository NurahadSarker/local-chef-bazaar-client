// import React from 'react';
// import { Link } from 'react-router';

// const MyReviews = () => {
//     return (
//         <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
//             <h1 className="text-[32px] font-bold mb-3">My Reviews</h1>
//             <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>Meals Name</th>
//                             <th>Rating</th>
//                             <th>Comment</th>
//                             <th>Date</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row 1 */}
//                         <tr>
//                             <td>Chicken Biriani</td>
//                             <td>4.8</td>
//                             <td>This is good</td>
//                             <td>11-12-2025</td>
//                             <td>
//                                 <Link className='bg-red-500 px-4 py-2 rounded-md w-10 mr-2'>Delete</Link>
//                                 <Link className='bg-green-500 px-4 py-2 rounded-md w-10'>Update</Link>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyReviews;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyReviews = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [reviews, setReviews] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentReview, setCurrentReview] = useState(null); // Edit করা review
    const [updatedText, setUpdatedText] = useState("");
    const [updatedRating, setUpdatedRating] = useState(0);

    // Fetch user reviews
    useEffect(() => {
        if (!user?.email) return;

        axiosSecure
            .get(`/reviews/user/${user.email}`)
            .then(res => setReviews(res.data))
            .catch(err => console.error(err));
    }, [user, axiosSecure]);

    // Delete review
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this review?")) return;

        try {
            const res = await axiosSecure.delete(`/reviews/${id}`);
            if (res.data.deletedCount > 0) {
                setReviews(reviews.filter(r => r._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Open modal
    const openModal = (review) => {
        setCurrentReview(review);
        setUpdatedText(review.review);
        setUpdatedRating(review.rating);
        setModalOpen(true);
    };

    // Update review
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!currentReview) return;

        try {
            const res = await axiosSecure.put(`/reviews/${currentReview._id}`, {
                review: updatedText,
                rating: updatedRating
            });

            if (res.data.modifiedCount > 0) {
                // Real-time update
                setReviews(reviews.map(r =>
                    r._id === currentReview._id
                        ? { ...r, review: updatedText, rating: updatedRating }
                        : r
                ));
                setModalOpen(false);
                setCurrentReview(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-base-100 max-w-6xl mx-auto my-15 shadow-lg p-10 rounded-2xl">
            <h1 className="text-[32px] font-bold mb-3">My Reviews</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Meals Name</th>
                            <th>Rating</th>
                            <th>Comment</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center text-gray-500">
                                    No reviews found
                                </td>
                            </tr>
                        )}
                        {reviews.map((r) => (
                            <tr key={r._id}>
                                <td>{r.foodName || "Unknown Meal"}</td>
                                <td>{r.rating}</td>
                                <td>{r.review}</td>
                                <td>{new Date(r.createdAt || r.date).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(r._id)}
                                        className='bg-red-500 px-4 py-2 rounded-md mr-2 text-white cursor-pointer'
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => openModal(r)}
                                        className='bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer'
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Modal ===== */}
            {modalOpen && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-sm">
                    <div className="bg-base-100 p-6 rounded-2xl max-w-lg w-full shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Update Review</h2>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div className="flex gap-2">
                                {[1,2,3,4,5].map(star => (
                                    <span
                                        key={star}
                                        className={`cursor-pointer text-2xl ${updatedRating >= star ? "text-yellow-500" : "text-gray-300"}`}
                                        onClick={() => setUpdatedRating(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <textarea
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                                required
                                placeholder="Update your review..."
                                className="w-full p-3 h-28 rounded-xl outline-none border"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 rounded-xl border cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-green-500 text-white cursor-pointer"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReviews;
