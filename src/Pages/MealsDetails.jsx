// import React from 'react';
// import Img from '../assets/chickenbiriani.jpg'
// import { FaStar } from 'react-icons/fa6';
// import { FaStarHalfAlt } from 'react-icons/fa';

// const MealsDetails = () => {
//     return (
//         <div className="max-w-2xl mx-auto h-200 my-16 relative shadow-xl rounded-3xl">
//             {/* Image */}
//             <div className="bg-base-100 h-full rounded-3xl border border-gray-300 overflow-hidden p-2">
//                 <img className="rounded-2xl w-full" src={Img} alt="" />
//             </div>

//             {/* Details Box */}
//             <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[97.6%] bg-base-100 p-5 rounded-3xl border border-gray-300">
//                 <div className='flex items-end gap-2 mb-2'>
//                     <h1 className="text-3xl font-bold">Chicken Biriani</h1>
//                     <p className="text-gray-400 mt-2">..... Cooked by 'Robi'</p>
//                 </div>
//                 <div className='flex items-center'>
//                     <div className='flex items-center gap-2 border-r border-gray-400 pr-3'>
//                         <div className='flex items-center gap-2 text-yellow-400'>
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStarHalfAlt />
//                             <h1 className='text-base-content font-bold -mb-1.5'>4.8</h1>
//                         </div>
//                         <h1 className='text-gray-400'>(120 Reviews)</h1>
//                     </div>
//                 </div>
//                 <button className="mt-4 btn btn-primary w-full">Order Now</button>
//             </div>
//         </div>
//     );
// };

// export default MealsDetails;

// import React, { useState } from "react";
// import Img from "../assets/chickenbiriani.jpg";

// const MealsDetails = () => {
//     // Dummy Data
//     const meal = {
//         foodName: "Chicken Biriyani",
//         chefName: "Nur-Ahad",
//         chefId: "CH-203",
//         price: 250,
//         rating: 4.8,
//         deliveryArea: "Dhaka City",
//         estimatedTime: "30–40 mins",
//         chefExperience: 4,
//         ingredients: [
//             "Basmati Rice",
//             "Chicken",
//             "Special Spices",
//             "Yogurt",
//             "Onion",
//             "Oil",
//         ],
//     };

//     // Dummy Review List
//     const [reviews, setReviews] = useState([
//         { userName: "Robiul", rating: 5, comment: "Very tasty!" },
//         { userName: "Atik", rating: 4, comment: "Good but spicy." },
//     ]);

//     // New review inputs
//     const [newReview, setNewReview] = useState({
//         rating: "",
//         comment: "",
//     });

//     // Handle review add locally (No backend)
//     const handleAddReview = (e) => {
//         e.preventDefault();

//         const newItem = {
//             userName: "Guest User",
//             rating: newReview.rating,
//             comment: newReview.comment,
//         };

//         setReviews([newItem, ...reviews]);
//         setNewReview({ rating: "", comment: "" });
//     };

//     return (
//         <div className="max-w-2xl mx-auto pb-24">

//             {/* Image */}
//             <div className="relative">
//                 <img src={Img} className="rounded-3xl w-full" alt="meal photo" />

//                 <span className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     ⭐ {meal.rating}
//                 </span>
//             </div>

//             {/* Details Card */}
//             <div className="-mt-10 bg-white p-6 rounded-3xl shadow">
//                 <h1 className="text-3xl font-bold">{meal.foodName}</h1>

//                 <p className="mt-1 text-gray-600">
//                     Chef: <b>{meal.chefName}</b> (ID: {meal.chefId})
//                 </p>

//                 <p className="text-xl font-semibold mt-3">
//                     Price: ৳{meal.price}
//                 </p>

//                 <div className="mt-4 space-y-1 text-gray-700">
//                     <p><b>Delivery Area:</b> {meal.deliveryArea}</p>
//                     <p><b>Estimated Time:</b> {meal.estimatedTime}</p>
//                     <p><b>Chef Experience:</b> {meal.chefExperience} Years</p>
//                 </div>
//             </div>

//             {/* Ingredients */}
//             <div className="mt-6 bg-white p-6 rounded-3xl shadow">
//                 <h2 className="text-xl font-semibold">Ingredients</h2>
//                 <ul className="list-disc ml-6 mt-2 text-gray-700">
//                     {meal.ingredients.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Review Section */}
//             <div className="mt-6 bg-white p-6 rounded-3xl shadow">
//                 <h2 className="text-xl font-bold mb-3">Reviews</h2>

//                 {/* Add Review */}
//                 <form onSubmit={handleAddReview} className="space-y-3">
//                     <select
//                         className="select select-bordered w-full"
//                         value={newReview.rating}
//                         onChange={(e) =>
//                             setNewReview({ ...newReview, rating: e.target.value })
//                         }
//                         required
//                     >
//                         <option value="">Rating (1–5)</option>
//                         <option value="1">1 ★</option>
//                         <option value="2">2 ★★</option>
//                         <option value="3">3 ★★★</option>
//                         <option value="4">4 ★★★★</option>
//                         <option value="5">5 ★★★★★</option>
//                     </select>

//                     <textarea
//                         className="textarea textarea-bordered w-full"
//                         placeholder="Write your review..."
//                         value={newReview.comment}
//                         onChange={(e) =>
//                             setNewReview({ ...newReview, comment: e.target.value })
//                         }
//                         required
//                     ></textarea>

//                     <button className="btn btn-primary w-full">Submit Review</button>
//                 </form>

//                 {/* Existing Reviews */}
//                 <div className="mt-5 space-y-4">
//                     {reviews.map((rev, index) => (
//                         <div key={index} className="p-3 border rounded-xl bg-gray-50">
//                             <p className="font-semibold">{rev.userName}</p>
//                             <p className="text-yellow-600 text-sm">⭐ {rev.rating}</p>
//                             <p className="text-gray-700 mt-1">{rev.comment}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Order Button */}
//             <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl p-4">
//                 <button className="btn btn-primary w-full text-lg">
//                     Order Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MealsDetails;


import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Img from "../assets/chickenbiriani.jpg";

const MealDetails = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const reviewData = {
            name: "Guest User",
            rating,
            review,
            time: new Date().toISOString(),
        };

        console.log("Review Submitted:", reviewData);

        setRating(0);
        setReview("");
        alert("Review submitted! (Backend না থাকায় শুধু console-এ দেখাবে)");
    };

    return (
        <div className="max-w-5xl mx-auto my-10 p-5">
            {/* ----- Top Section (Image + Info) ----- */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Image */}
                <div>
                    <img
                        src={Img}
                        alt="Food"
                        className="rounded-3xl shadow-md w-full"
                    />
                </div>

                {/* Info */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Chicken Biriyani</h1>
                    <p className="text-gray-600">
                        Cooked by <span className="font-semibold">Nur-Ahad</span> (ID: Ch-203)
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <span className="text-sm ml-2 text-gray-700">(29 reviews)</span>
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Non-veg</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bangladeshi</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Main Course</span>
                    </div>

                    {/* Price & Servings */}
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="text-xl font-bold">Tk. 250</p>

                        <p className="text-sm text-gray-600">Serves</p>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <button
                                    key={n}
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-black hover:text-white duration-200"
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart / Order Button */}
                    <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-2xl font-semibold mt-4">
                        Order Now
                    </button>
                </div>
            </div>

            {/* ----- Tabs Section ----- */}
            <div className="flex gap-8 mt-10 border-b">
                <button className="pb-3 text-gray-500 hover:text-black">Details</button>
                <button className="pb-3 text-gray-500 hover:text-black">Nutrition</button>

                {/* Active Tab */}
                <button className="pb-3 border-b-2 border-purple-700 font-semibold text-black">
                    Customer Reviews
                </button>
            </div>

            {/* ----- Existing Reviews ----- */}
            <div className="mt-8 space-y-6">

                {/* Review 1 */}
                <div className="flex gap-4 items-start">
                    <img
                        src="https://i.pravatar.cc/70?img=5"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">Marie Morrison</h3>
                        <div className="flex gap-1 text-yellow-500 my-1">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="text-gray-600">Amazing food! Loved the spices and portion size.</p>
                        <p className="text-xs text-gray-400 mt-1">12 mins ago</p>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="flex gap-4 items-start">
                    <img
                        src="https://i.pravatar.cc/70?img=8"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">Brandon Porter</h3>
                        <div className="flex gap-1 text-yellow-500 my-1">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                        </div>
                        <p className="text-gray-600">Loved the biriyani but could be a bit spicier.</p>
                        <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                    </div>
                </div>
            </div>

            {/* ----- Add Review Form ----- */}
            <div className="mt-10 p-6 rounded-2xl border shadow-sm bg-white">
                <h2 className="text-xl font-semibold mb-3">Add Your Review</h2>

                {/* Rating Stars */}
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size={25}
                            className={`cursor-pointer ${
                                (hover || rating) >= star
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                            }`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full border rounded-xl p-3 h-28 outline-none focus:ring focus:ring-purple-300"
                        placeholder="Write your review..."
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-xl font-semibold"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MealDetails;
