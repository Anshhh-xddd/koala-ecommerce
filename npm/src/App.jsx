import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbar from './Component/Navbar/Navbar';
import Aboutpage from './Pages/Aboutpage';
import Mattrespage from './Pages/Mattrespage';
import Sofapage from './Pages/Sofapage';
import ShopSale from './Pages/ShopSale';
// import SofaBeds from './Pages/SofaBeds';
import CategoryPage from './Pages/CategoryPage';
import Clearance from './Pages/Clearance';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import Profile from './Pages/Profile';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  // Simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Category data
  const categories = [
    {
      title: "Sofas",
      subcategories: ["Sofas", "Bed Sofas", "Modual Sofas", "Chaise sofas", "Sofa Beds", "Loveseats"],
    },
    {
      title: "Bedrooms",
      subcategories: ["Mattresses", "Bed Bases", "Bundles", "Pillow", "Headboards", "Chests"],
    },
    {
      title: "Living Room",
      subcategories: ["Sofas Beds", "Sofas", "Armchairs", "Rugs", "Bookcases", "Ottomans"],
    },
    {
      title: "Outdoor",
      subcategories: ["Outdoor Sofas", "Dining Sets", "Loungers", "Fire Pits", "Umbrellas", "Grills"],
    },
  ];

  return (
    <div className="app">
      {/* Navbar renders consistently across all routes */}
      <Navbar />

      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/sofa" element={<Sofapage />} />
        <Route path="/mattress" element={<Mattrespage />} />
        <Route path="/shop-sale" element={<ShopSale />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Conditional Route for Profile */}
        <Route
          path="/profile"
          element={
            isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Dynamic Routes for Categories */}
        {categories.map((category) =>
          category.subcategories.map((subcategory) => {
            const categoryPath = category.title.toLowerCase().replace(/\s+/g, "-");
            const subcategoryPath = subcategory.toLowerCase().replace(/\s+/g, "-");

            return (
              <Route
                key={`${category.title}-${subcategory}`}
                path={`/${categoryPath}/${subcategoryPath}`}
                element={<CategoryPage category={category.title} subcategory={subcategory} />}
              />
            );
          })
        )}

        {/* Fallback Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
