import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Img from "../assets/chickenbiriani.jpg";
import { Link, NavLink, Outlet, useLoaderData } from "react-router";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const MealDetails = () => {
    const [favoriteBtn, setFavoriteBtn] = useState(false)
    const meals = useLoaderData()
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    console.log(user)
    const mealsId = meals._id

    /* ===== FETCH REVIEWS ===== */
    useEffect(() => {
    if (!mealsId) return;

    axiosSecure
        .get(`/reviews/${mealsId}`)
        .then(res => setReviews(res.data))
        .catch(err => console.error(err));
}, [mealsId, axiosSecure]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
    mealsId: mealsId.toString(), // <-- ObjectId না, string
    userName: user?.displayName || "Anonymous",
    userPhoto: user?.photoURL || "https://i.pravatar.cc/70",
    rating,
    review: reviewText,
};


        // POST request
        const res = await axiosSecure.post("/reviews", newReview);

        if (res.data.insertedId) {
            // Server থেকে নতুন review fetch করার পরিবর্তে, আমরা newReview তেই _id বসাচ্ছি
            const reviewWithId = { ...newReview, _id: res.data.insertedId };
            setReviews([...reviews, reviewWithId]); // UI তে নতুন review add
            setRating(0);
            setReviewText("");
        }
    };

    return (
        <div className="max-w-5xl mx-auto my-10 p-5">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <img
                        src={meals.image}
                        alt="Food"
                        className="rounded-3xl shadow-md w-full"
                    />
                </div>
                <div className="space-y-2 border-l-3 border-gray-400 pl-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold">{meals.foodName}</h1>
                        <button onClick={() => setFavoriteBtn(!favoriteBtn)} className="flex items-center justify-center p-3 hover:cursor-pointer">
                            {
                                favoriteBtn ? <MdFavorite className="text-red-500" size={30} /> : <MdFavoriteBorder size={30} />
                            }
                        </button>
                    </div>
                    <p className="text-gray-500">
                        Cooked by <span className="font-semibold">{meals.chefName}</span> (ID: {meals.chefId})
                    </p>
                    <div>
                        <p className="text-sm text-gray-500">Chef Experience</p>
                        <span className="py-1 text-sm font-semibold">
                            {meals.experience} Years Experience
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <span className="text-sm ml-2 text-gray-500">(29 reviews)</span>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-sm text-gray-500">Delivery Area</p>
                            <span className="py-1 text-sm font-semibold">
                                Mirpur, Dhanmondi, Gulshan
                            </span>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <p className="text-xl font-bold">Tk. {meals.price}</p>
                    </div>
                    <Link to={'/order-page'} state={{ meal: meals }} className="btn w-full bg-[#FF6700] hover:bg-[#f06000] hover:cursor-pointer text-white rounded-2xl font-semibold mt-4">
                        Order Now
                    </Link>
                </div>
            </div>
            <div className="flex gap-8 mt-10 border-b border-gray-400">


            </div>

            <div className="mt-10">

                {/* ===== EXISTING REVIEWS ===== */}
                <div className="space-y-6 max-h-80 overflow-y-auto pr-3">
                    {reviews.map((r, index) => (
                        <div key={index} className="flex gap-4">
                            <img
                                src={r.userPhoto}
                                className="w-14 h-14 rounded-full"
                            />

                            <div>
                                <h3 className="font-semibold">{r.userName}</h3>

                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < r.rating ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-600">{r.review}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* ===== ADD REVIEW ===== */}
                <div className="mt-10 p-6 rounded-2xl shadow bg-base-100">
                    <h2 className="text-xl font-semibold mb-3">Add Your Review</h2>

                    {/* ⭐ Rating */}
                    <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map(star => (
                            <FaStar
                                key={star}
                                size={24}
                                className={`cursor-pointer ${(hover || rating) >= star
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                    }`}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>

                    {/* ✍️ Review Text */}
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                            placeholder="Write your review..."
                            className="w-full p-3 h-28 rounded-xl outline-none"
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-[#FF6700] text-white px-6 py-3 rounded-xl"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;
