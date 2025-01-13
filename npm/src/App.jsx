// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; // Import useState here
import { Routes, Route } from 'react-router-dom'; // Import routing components
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Mattrespage from './Pages/Mattrespage';
import Sofapage from './Pages/Sofapage';
import Aboutinn from './Pages/Aboutinn';
import ShopSale from './Pages/ShopSale';
import SofaBeds from './Pages/SofaBeds';
import CategoryPage from './Pages/CategoryPage';
import Clearance from './Pages/Clearance';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

const App = () => {
  // Simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categories = [
    {
      title: "Sofas",
      subcategories: [
        "Leather Sofas", "Fabric Sofas", "Recliners", "Sectionals",
        "Sofa Beds", "Loveseats"
      ],
    },
    {
      title: "Bedrooms",
      subcategories: [
        "Beds", "Wardrobes", "Dressers", "Nightstands",
        "Headboards", "Chests"
      ],
    },
    {
      title: "Living Room",
      subcategories: [
        "Coffee Tables", "TV Stands", "Accent Chairs", "Console Tables",
        "Bookcases", "Ottomans"
      ],
    },
    {
      title: "Outdoor",
      subcategories: [
        "Outdoor Sofas", "Dining Sets", "Loungers", "Fire Pits",
        "Umbrellas", "Grills"
      ],
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Sofa" element={<Sofapage />} />
        <Route path="/Mattres" element={<Mattrespage />} />
        <Route path="/sofa-beds" element={<Mattrespage />} />
        <Route path="/bed-bases" element={<Mattrespage />} />
        <Route path="/sofas" element={<Mattrespage />} />
        <Route path="/about" element={<Aboutinn />} />
        <Route path="/Aboutinn" element={<Aboutinn />} />
        <Route path="/shop-sale" element={<ShopSale />} />
        <Route path="/sofa-beds" element={<SofaBeds />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/cart" element={<Cart />} />

        {/* Personalized route */}
        {isLoggedIn ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        )}

        {/* Dynamic Category and Subcategory routes */}
        {categories.map((category) =>
          category.subcategories.map((subcategory) => (
            <Route
              key={`${category.title}-${subcategory}`}
              path={`/${category.title.toLowerCase().replace(" ", "-")}/${subcategory
                .toLowerCase()
                .replace(" ", "-")}`}
              element={<CategoryPage category={category.title} subcategory={subcategory} />}
            />
          ))
        )}
      </Routes>
    </>
  );
};

export default App;
