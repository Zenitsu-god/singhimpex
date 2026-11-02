'use client'

import { Star, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const RatingModal = ({ ratingModal, setRatingModal }) => {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = async () => {

        if (rating === 0) {
            return toast.error("Please select a rating");
        }

        if (review.trim().length < 5) {
            return toast.error("Please write a short review");
        }

        // API Call Here

        setRatingModal(null);

        toast.success("Thank you for your feedback!");

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

            <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-7">

                {/* Close */}

                <button
                    onClick={() => setRatingModal(null)}
                    className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 transition"
                >
                    <X size={20} />
                </button>

                {/* Heading */}

                <h2 className="text-2xl font-semibold text-slate-800">
                    Rate this Product
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                    Share your experience to help other customers.
                </p>

                {/* Stars */}

                <div className="flex justify-center gap-2 my-8">

                    {Array.from({ length: 5 }, (_, i) => (

                        <Star
                            key={i}
                            size={34}
                            onClick={() => setRating(i + 1)}
                            className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                                rating > i
                                    ? "text-amber-500 fill-amber-500"
                                    : "text-gray-300"
                            }`}
                        />

                    ))}

                </div>

                {/* Review */}

                <textarea
                    rows={4}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full rounded-xl border border-gray-300 p-4 resize-none outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />

                {/* Button */}

                <button
                    onClick={() =>
                        toast.promise(handleSubmit(), {
                            loading: "Submitting..."
                        })
                    }
                    className="w-full mt-6 rounded-xl bg-amber-700 py-3 font-medium text-white transition hover:bg-amber-800"
                >
                    Submit Review
                </button>

            </div>

        </div>

    );
};

export default RatingModal;