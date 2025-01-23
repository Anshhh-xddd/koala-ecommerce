import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [size, setSize] = useState("Queen");
    const [firmness, setFirmness] = useState("Flippable Firmness");
    const [reviews, setReviews] = useState([
        { name: "John Doe", rating: 5, comment: "Best mattress I’ve ever had!" },
        { name: "Jane Smith", rating: 4, comment: "Very comfortable and supportive." },
        { name: "Alice Johnson", rating: 5, comment: "Great quality and fast delivery!" },
    ]);
    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
    const [product, setProduct] = useState(null);

    // Simulate fetching product details from an API
    useEffect(() => {
        const fetchProductData = async () => {
            // Example fetched product data
            const fetchedProduct = {
                id,
                name: "Koala Mattress",
                price: 1250,
                description: "Australia's top-rated mattress with enhanced comfort.",
                images: {
                    "Single": "https://au.koala.com/cdn/shop/files/SOFABED_WOODLAND_1.5SEATER_5.webp?v=1727275118&width=720", // Image for Single
                    "Queen": "https://au.koala.com/cdn/shop/files/6a80e18f883fe8e0c16fb17c6724bcf5.png?v=1725501907&width=720",  // Image for Queen
                    "King": "https://au.koala.com/cdn/shop/files/addf95a2093b626b6d202b299bf8bca4.png?v=1725500695&width=720",    // Image for King
                    "Super King": "https://au.koala.com/cdn/shop/articles/best-sofa-bed.jpg?v=1728975262" // Image for Super King
                },
                image: "https://au.koala.com/cdn/shop/files/d52c987f6e8ab40648a111a21b8da172.png?v=1725501367&width=720" // Default image (for example, Queen image)
            };
            setProduct(fetchedProduct);
        };

        fetchProductData();
    }, [id]);

    if (!product) return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-600" role="status"></div>
                <p className="mt-4 text-gray-600">Loading product details...</p>
            </div>
        </div>
    );

    // Handle adding the product to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert(`${product.name} has been added to your cart!`);
    };

    // Handle review submission
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.comment && newReview.rating > 0) {
            setReviews([...reviews, newReview]);
            setNewReview({ name: "", rating: 0, comment: "" });
        }
    };

    // Handle size change to update the image
    const handleSizeChange = (newSize) => {
        setSize(newSize);
        setProduct((prevProduct) => ({
            ...prevProduct,
            image: prevProduct.images[newSize], // Change the image based on selected size
        }));
    };

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
                                    onClick={() => handleSizeChange(option)}
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
                    <button
                        className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={handleAddToCart}
                    >
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
