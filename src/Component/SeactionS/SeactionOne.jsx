import React, { useState } from 'react';

const SectionOne = () => {
  const products = [
    {
      image: 'https://au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=3000', // Replace with the actual image URL
      title: 'Mattresses',
      discount: 'Up to 30% off',
    },
    {
      image: 'https://au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=3000', // Replace with the actual image URL
      title: 'Sofa Beds',
      discount: 'Up to 25% off',
    },
    {
      image: 'https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3000', // Replace with the actual image URL
      title: 'Bed Bases',
      discount: 'Up to 25% off',
    },
    {
      image: 'https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=1500', // Replace with the actual image URL
      title: 'Sofas',
      discount: 'Up to 25% off',
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      {/* Header Section */}
      <div className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Save up to <span className="text-orange-500">30% off</span> on Everything
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <button
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6 text-center"
              onClick={() => alert(`Clicked on ${product.title}`)}
            >
              {/* Discount Badge */}
              <div
                className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${isHovered ? 'bg-orange-700' : 'bg-orange-500'} text-white`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {product.discount}
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Product Title */}
              <h3 className="mt-4 text-lg font-bold text-gray-700">
                {product.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SectionOne
