import React, { useState } from "react";
// import "./index.css"; // TailwindCSS setup

function Card() {
  const [size, setSize] = useState("Queen");
  const [firmness, setFirmness] = useState("Flippable Firmness");
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 5, comment: "Best mattress I’ve ever had!" },
    { name: "Jane Smith", rating: 4, comment: "Very comfortable and supportive." },
    { name: "Alice Johnson", rating: 5, comment: "Great quality and fast delivery!" },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  // Image mapping for different sizes
  const sizeImages = {
    Single: "https://via.placeholder.com/600x400?text=Single+Size",
    Queen: "https://via.placeholder.com/600x400?text=Queen+Size",
    King: "https://via.placeholder.com/600x400?text=King+Size",
    "Super King": "https://via.placeholder.com/600x400?text=Super+King+Size",
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      setReviews([...reviews, newReview]); // Add the new review to the list
      setNewReview({ name: "", rating: 0, comment: "" }); // Reset the form
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div>
          <img
            src={sizeImages[size]} // Dynamic image based on size selection
            alt="Product"
            className="w-full rounded-lg shadow"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail 1"
              className="w-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail 2"
              className="w-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail 3"
              className="w-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail 4"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">Koala Mattress</h1>
          <p className="text-gray-500 mb-4">$1,250</p>

          {/* Size Selector */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-2">
              {["Single", "Queen", "King", "Super King"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSize(option)}
                  className={`px-4 py-2 border rounded ${
                    size === option ? "bg-green-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Firmness Selector */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Comfort</h3>
            <div className="flex gap-2">
              {["Flippable Firmness", "Partner Preference"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFirmness(option)}
                  className={`px-4 py-2 border rounded ${
                    firmness === option
                      ? "bg-green-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Add to Cart - $1,250
          </button>

          {/* Product Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-600">
              Australia's top-rated mattress with enhanced comfort, flippable
              firmness, and sustainable materials. Perfect for life-changing
              sleep.
            </p>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-yellow-500 mb-1">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* Add Review Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: parseInt(e.target.value) })
              }
              className="w-full border p-2 rounded"
              placeholder="Enter a rating"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Review</label>
            <textarea
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="w-full border p-2 rounded"
              rows="4"
              placeholder="Write your review here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
