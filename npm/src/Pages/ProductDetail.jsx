import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [size, setSize] = useState("Queen");
    const [firmness, setFirmness] = useState("Flippable Firmness");
    const [reviews, setReviews] = useState([
        { name: "John Doe", rating: 5, comment: "Best mattress I’ve ever had!" },
        { name: "Jane Smith", rating: 4, comment: "Very comfortable and supportive." },
        { name: "Alice Johnson", rating: 5, comment: "Great quality and fast delivery!" },
    ]);
    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
    const [product, setProduct] = useState(null);

    // Image mapping for different sizes
    const sizeImages = {
        Single: "data:image/jpeg;base64,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",
        Queen: "data:image/jpeg;base64,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",
        King: "data:image/jpeg;base64,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",
        "Super King": "data:image/jpeg;base64,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"
    };

    useEffect(() => {
        // Simulate an API call to fetch product details using the ID
        const fetchProductData = async () => {
            // Example: Replace with actual API call
            const fetchedProduct = {
                name: "Koala Mattress",
                price: 1250,
                description: "Australia's top-rated mattress with enhanced comfort, flippable firmness, and sustainable materials.",
                image: sizeImages[size],
            };
            setProduct(fetchedProduct);
        };

        fetchProductData();
    }, [id, size]); // Run the fetch when the `id` or `size` changes

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.comment && newReview.rating > 0) {
            setReviews([...reviews, newReview]);
            setNewReview({ name: "", rating: 0, comment: "" });
        }
    };

    if (!product) return <div className="text-center py-12">Loading...</div>;

    return (
        <div className="container mx-auto p-8 space-y-12">
            {/* Header with Product ID */}
            <header className="text-center">
                <h1 className="text-4xl font-semibold mb-2">Product Details</h1>
                <p className="text-gray-500">Product ID: {id}</p>
            </header>

            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                {/* Product Images */}
                <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:items-start">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-lg rounded-lg shadow-md"
                    />
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {[1, 2, 3, 4].map((num) => (
                            <img
                                key={num}
                                src={`https://via.placeholder.com/80?text=Thumb+${num}`}
                                alt={`Thumbnail ${num}`}
                                className="w-full rounded-md shadow-sm hover:opacity-80"
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold">{product.name}</h2>
                    <p className="text-xl text-gray-700">${product.price}</p>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Size Selector */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Select Size</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Single", "Queen", "King", "Super King"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSize(option)}
                                    className={`px-6 py-2 text-sm font-medium border rounded-lg ${
                                        size === option
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 text-gray-700"
                                    } transition duration-300 ease-in-out hover:bg-green-500`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Firmness Selector */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Select Comfort</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Flippable Firmness", "Partner Preference"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setFirmness(option)}
                                    className={`px-6 py-2 text-sm font-medium border rounded-lg ${
                                        firmness === option
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 text-gray-700"
                                    } transition duration-300 ease-in-out hover:bg-green-500`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300">
                        Add to Cart - ${product.price}
                    </button>
                </div>
            </div>

            {/* Customer Reviews */}
            <section>
                <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="text-yellow-500 mb-1">
                                {"★".repeat(review.rating)}{" "}
                                {"☆".repeat(5 - review.rating)}
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                )}
            </section>

            {/* Add Review Form */}
            <section>
                <h3 className="text-2xl font-semibold mb-4">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            value={newReview.name}
                            onChange={(e) =>
                                setNewReview({ ...newReview, name: e.target.value })
                            }
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            value={newReview.rating}
                            onChange={(e) =>
                                setNewReview({ ...newReview, rating: parseInt(e.target.value) })
                            }
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter a rating"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Your Review</label>
                        <textarea
                            value={newReview.comment}
                            onChange={(e) =>
                                setNewReview({ ...newReview, comment: e.target.value })
                            }
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="4"
                            placeholder="Write your review here"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Submit Review
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ProductDetail;
