import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Carousel from './Component/Corosoual/Carousel';
import Underline from './Component/Corosoual/Underline';
import SectionOne from './Component/SeactionS/SeactionOne';
import Seaction from './Component/SeactionS/Seaction';
import SectionTwo from './Component/SeactionS/SeactionTwo';
import Slider from './Component/SeactionS/Slider';
import SeactionThree from './Component/SeactionS/SeactionThree';
import Review from './Component/Review/Review';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';

// Components for Routes
import Inner from './Component/ExternalComp/Inner'; // Ensure this is imported correctly
import AddToCart from './Component/ExternalComp/AddToCart'
import Card from './Component/ExternalComp/Card'
import Aboutinn from './Component/ExternalComp/Aboutinn'
import Aibutton from './Component/ExternalComp/Aibutton'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Underline />

      {/* Routes Section */}
      <SectionOne />
      {/* Other Components */}
      <Seaction />
      <Slider />
      <SectionTwo />
      <SeactionThree />
      <Review />
      <About />
      <Footer />
    </>

  );
};

export default App;
