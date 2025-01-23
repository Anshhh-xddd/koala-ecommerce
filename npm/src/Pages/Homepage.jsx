// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Component/Header/Header';
// import Navbar from '../Component/Navbar/Navbar';
import Carousel from '../Component/Corosoual/Carousel';
import Underline from '../Component/Corosoual/Underline';
import SectionOne from '../Component/SeactionS/SeactionOne';
import Seaction from '../Component/SeactionS/Seaction';
import SectionTwo from '../Component/SeactionS/SeactionTwo';
import Slider from '../Component/SeactionS/Slider';
import SeactionThree from '../Component/SeactionS/SeactionThree';
import Review from '../Component/Review/Review';
import About from '../Component/About/About';
import Footer from '../Component/Footer/Footer';

const Homepage = () => {
  return (
    <>
    <Header />
    {/* <Navbar /> */}
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
  )
}

export default Homepage 