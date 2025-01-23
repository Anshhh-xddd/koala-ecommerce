import React from "react";
import About from "../Component/About/About";
import Aboutpage from "./Aboutpage";

export default function Mattrespage() {
  const products = [
    {
      id: 1,
      name: "Koala Calm As Mattress",
      price: "Queen from $1,050",
      rating: 4.8,
      features: "Plush comfort layers",
      image: "https://au.koala.com/cdn/shop/files/Queen_Luxe_Mattress_1_3.webp?v=1728130989&width=720",
      tags: ["Best Seller"],
    },
    {
      id: 2,
      name: "Koala Plus Mattress",
      price: "Queen from $1,350",
      rating: 4.9,
      features: "Adjustable firmness with cool comfort",
      image: "https://au.koala.com/cdn/shop/files/PlusMattress_4_1.jpg?v=1728227347&width=720",
      tags: ["Award-winning"],
    },
    {
      id: 3,
      name: "Koala Mattress",
      price: "Queen from $999",
      rating: 4.7,
      features: "Firm with plush comfort options",
      image: "https://au.koala.com/cdn/shop/files/AU_-_The_New_Koala_Mattress_-_Queen_-_1_2.webp?v=1728135769&width=720",
      tags: ["Top Pick"],
    },
    {
      id: 4,
      name: "Koala SE Mattress",
      price: "Queen from $850",
      rating: 4.6,
      features: "Medium-firm layers for support",
      image: "https://au.koala.com/cdn/shop/files/SEMattress_12_1_869df618-64d5-4f28-b432-ae4aa71c1bd5.jpg?v=1728227524&width=720",
      tags: ["Affordable"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      user: "John D.",
      review: "Life changing mattress, the best sleep I've ever had!",
      stars: 5,
      image: "https://au.koala.com/cdn/shop/files/3257a0ff-491a-49dc-b026-034c3c390ac5.webp?v=1728632062&width=782",
    },
    {
      id: 2,
      user: "Sarah L.",
      review: "Such a comfy mattress, perfect for my family.",
      stars: 5,
      image: "https://au.koala.com/cdn/shop/files/0fe80c78-cdad-48d9-b395-4ad76d29c93d.webp?v=1728629161&width=782",
    },
    {
      id: 3,
      user: "Chris P.",
      review: "We should've upgraded years ago! Highly recommend.",
      stars: 5,
      image: "https://au.koala.com/cdn/shop/files/4bd2100f-feba-4f32-9bc4-bc1d65266816.webp?v=1728628443&width=782",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header: Featured Products */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Australia's most awarded mattress brand
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
              <p className="text-green-500 font-medium mt-1">{product.features}</p>
              <p className="mt-2 text-yellow-500">
                {"⭐".repeat(Math.round(product.rating))}
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Find your perfect mattress
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-gray-200">
                {products.map((product) => (
                  <th key={product.id} className="p-4 text-left font-semibold">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {products.map((product) => (
                  <td key={product.id} className="p-4 border">
                    ⭐ {product.rating}
                  </td>
                ))}
              </tr>
              <tr>
                {products.map((product) => (
                  <td key={product.id} className="p-4 border">
                    {product.features}
                  </td>
                ))}
              </tr>
              <tr>
                {products.map((product) => (
                  <td key={product.id} className="p-4 border">
                    {product.price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Over 500,000 happy customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.user}
                className="w-full h-42 object-cover rounded-md mb-4"
              />
              <p className="text-yellow-500 mb-2">
                {"⭐".repeat(testimonial.stars)}
              </p>
              <p className="text-gray-600 italic mb-2">
                "{testimonial.review}"
              </p>
              <p className="text-gray-800 font-semibold">{testimonial.user}</p>
            </div>
          ))}
        </div>
      </section>
     <Aboutpage />
      {/* Media Mentions
      <section className="my-10 text-center">
        <h3 className="text-lg font-semibold mb-4">As seen in</h3>
        <div className="flex justify-center space-x-6">
          {["VOGUE", "BAZAAR", "GQ", "REFINERY29"].map((media, index) => (
            <p
              key={index}
              className="text-2xl font-bold text-gray-700 uppercase"
            >
              {media}
            </p>
          ))}
        </div>
      </section> */}
    </div>
  );
}
