import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewSection = () => {
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
        <div>
            {/*className="max-w-5xl mx-auto my-10 p-5"*/}
            {/* ----- Existing Reviews ----- */}
            <div className="mt-8 space-y-6 max-h-80 overflow-y-auto pr-3">

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
            <div className="mt-10 p-6 rounded-2xl shadow-sm bg-base-100">
                <h2 className="text-xl font-semibold mb-3">Add Your Review</h2>

                {/* Rating Stars */}
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size={25}
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

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full  rounded-xl p-3 h-28 outline-none focus:ring focus:ring-[#FF6700]"
                        placeholder="Write your review..."
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-4 button2 py-3 px-6 rounded-xl font-semibold"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewSection;