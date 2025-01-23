import React, { useState } from "react";

export default function CategoryPage() {
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Simulated product data
  const products = [
    {
      id: 1,
      name: "Bangalow Modular Sofa",
      price: 1800,
      color: ["green", "brown"],
      tags: ["Best Seller"],
      image: "",
    },
    {
      id: 2,
      name: "Cushy Sofa Bed",
      price: 1390,
      color: ["green", "grey"],
      tags: ["Award-winning"],
      image: "https://tinyurl.com/mr39nyhe",
    },
    {
      id: 3,
      name: "Modern Leather Sofa",
      price: 2300,
      color: ["brown", "grey"],
      tags: ["New"],
      image: "https://via.placeholder.com/300/915C47",
    },
    // Add more products as needed...
  ];

  const colors = ["green", "brown", "grey", "blue"];
  const tags = ["Best Seller", "Award-winning", "New"];

  // Filter products based on filters and search term
  let filteredProducts = products
    .filter(
      (product) =>
        (selectedColor.length === 0 ||
          selectedColor.some((color) => product.color.includes(color))) &&
        (selectedTag.length === 0 ||
          selectedTag.some((tag) => product.tags.includes(tag))) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Sort products
  if (sortOption === "priceLowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleFilter = (filter, setFilterState, value) => {
    setFilterState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Navigation */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Top Categories</h2>
        <div className="flex space-x-4 mt-4 overflow-x-auto">
          {["Sofas", "Sofa Beds", "Modular Sofas", "Corner Sofas"].map(
            (category, index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/150x100?text=${category}`}
                alt={category}
                className="rounded-lg shadow-md hover:shadow-lg"
              />
            )
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Color</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`px-2 py-1 rounded text-sm transition ${
                    selectedColor.includes(color)
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => toggleFilter(color, setSelectedColor, color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-2 py-1 rounded text-sm transition ${
                    selectedTag.includes(tag)
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => toggleFilter(tag, setSelectedTag, tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Price Range</h4>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                className="w-16 px-2 py-1 border rounded text-sm"
                value={priceRange[0]}
                min={0}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
              <span className="text-sm">to</span>
              <input
                type="number"
                className="w-16 px-2 py-1 border rounded text-sm"
                value={priceRange[1]}
                max={5000}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </div>
          </div>

          {/* Sort Options */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Sort By</h4>
            <select
              className="w-full px-4 py-2 border rounded text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">${product.price}</p>
                  <div className="flex gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products match the selected filters.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
