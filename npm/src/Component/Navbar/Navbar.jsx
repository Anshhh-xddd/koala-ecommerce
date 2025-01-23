import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartPlus, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState([false, false, false, false]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef([]);

  const categories = [
    {
      title: "Sofas",
      subcategories: [
        { name: "Sofas", imgSrc: "https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=500" },
        { name: "Bed Sofas", imgSrc: "https://au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=500" },
        { name: "Modual Sofas", imgSrc: "https://au.koala.com/cdn/shop/files/ecd9f5d3357467ffae3d088e102b054f.png?v=1725498723&width=500" },
        { name: "Chaise sofas", imgSrc: "https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=500" },
      ],
    },
    {
      title: "Bedrooms",
      subcategories: [
        { name: "Mattresses", imgSrc: "https://au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=500" },
        { name: "Bed Bases", imgSrc: "https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=500" },
        { name: "Bundles", imgSrc: "https://au.koala.com/cdn/shop/files/CushyLuxe_PenguinParade_Double_1_ca892c9b-5879-49a0-bf12-cd88f3e4adc2_1.png?v=1726272834&width=500" },
        { name: "Pillow", imgSrc: "https://au.koala.com/cdn/shop/files/CushyLuxe_PenguinParade_Double_1_ca892c9b-5879-49a0-bf12-cd88f3e4adc2_1.png?v=1726272834&width=500" },
      ],
    },
    {
      title: "Living Room",
      subcategories: [
        { name: "Sofas Beds", imgSrc: "https://au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=500" },
        { name: "Sofas", imgSrc: "https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=500" },
        { name: "Armchairs", imgSrc: "https://au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1727415254&width=500" },
        { name: "Rugs", imgSrc: "https://au.koala.com/cdn/shop/collections/ff220ca59ff40373d7bb325344fa2ca5.png?v=1728602529&width=500" },
      ],
    },
    {
      title: "Outdoor",
      subcategories: [
        { name: "Outdoor Lounge sets", imgSrc: "https://au.koala.com/cdn/shop/files/041d07346266ec3f6edf1a4ee7de14c2.png?v=1725501870&width=500" },
        { name: "Outdoor Dining Sets", imgSrc: "https://au.koala.com/cdn/shop/files/fa13a7cda679550c50817a11d7446ed5.png?v=1725501756&width=500 " },
        { name: "Outdoor Lounge Sets", imgSrc: "https://au.koala.com/cdn/shop/files/5345895de78485128e31b5c5b46db2f8.png?v=1725501810&width=500" },
        { name: "Outdoor Coffee Tables", imgSrc: "https://au.koala.com/cdn/shop/files/3fe2d629835e65c8e142b4131861db11.png?v=1725501616&width=500" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setDropdowns((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  

  const handleOutsideClick = (event) => {
    if (!dropdownRefs.current.some((ref) => ref && ref.contains(event.target))) {
      setDropdowns([false, false, false, false]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="bg-gray-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Koala
          </Link>

          {/* Mobile Menu & Icons */}
          <div className="lg:hidden flex items-center space-x-6 relative">
            {isSearchActive ? (
              <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-2 z-10">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-200 p-2 rounded-md outline-none"
                  aria-label="Mobile search bar"
                />
              </div>
            ) : (
              <FaSearch
                className="text-gray-800 text-xl cursor-pointer"
                onClick={() => setIsSearchActive(true)}
                aria-label="Toggle search"
              />
            )}
            <Link to="/cart" aria-label="Cart">
              <FaCartPlus className="text-gray-800 text-xl cursor-pointer" />
            </Link>
            <button className="text-gray-800 text-xl focus:outline-none">
              <FaUser />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 text-xl focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:static bg-gray-100 top-16 left-0 lg:bg-transparent shadow-lg lg:shadow-none z-10`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              <Link to="/mattress" className="text-yellow-600 font-semibold">
                Shop Sale
              </Link>
              <Link to="/mattress" className="hover:text-gray-600">
                Mattresses
              </Link>
              <Link to="/mattress" className="hover:text-gray-600">
                Sofa Beds
              </Link>

              {/* Dropdown Menus */}
              {categories.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  className="relative"
                >
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-gray-600 flex items-center space-x-1"
                    aria-expanded={dropdowns[index]}
                  >
                    <span>{category.title}</span>
                    <span
                      className={`transition-transform ${
                        dropdowns[index] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      &#9660;
                    </span>
                  </button>
                  {dropdowns[index] && (
                    <div className="absolute bg-white shadow-md mt-2 rounded-md w-[350px] z-10">
                      <div className="flex flex-wrap p-4 gap-4">
                        {category.subcategories.map((sub, subIndex) => (
                          <div key={subIndex} className="w-1/3 text-center">
                            <img
                              src={sub.imgSrc}
                              alt={sub.name}
                              className="w-full h-20 object-cover rounded-md mb-2"
                              onError={(e) =>
                                (e.target.src = "/images/placeholder.jpg")
                              }
                            />
                            <Link
                              to={`/${category.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}/${sub.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="text-gray-800 hover:text-gray-600 text-sm"
                            >
                              {sub.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/mattress">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4 lg:mt-0">
                  Clearance
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Search & Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              {isSearchActive ? (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-200 border border-gray-300 pl-8 pr-4 py-2 rounded-md w-64"
                  aria-label="Search bar"
                />
              ) : (
                <FaSearch
                  className="text-gray-600 cursor-pointer"
                  onClick={() => setIsSearchActive(true)}
                  aria-label="Activate search bar"
                />
              )}
            </div>
            <button className="text-gray-600">
              <FaUser />
            </button>
            <Link to="/cart" className="text-gray-600">
              <FaCartPlus />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
            