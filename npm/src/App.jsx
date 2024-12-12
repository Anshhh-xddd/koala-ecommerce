import React from 'react'
import Header from './Component/Header/Header'
import Navbar from './Component/Navbar/Navbar'
import Carousel from './Component/Corosoual/Carousel'
import Underline from './Component/Corosoual/Underline'
import SectionOne from './Component/SeactionS/SeactionOne'
import Seaction from './Component/SeactionS/Seaction'
import SectionTwo from './Component/SeactionS/SeactionTwo'
import Slider from './Component/SeactionS/Slider'
import SeactionThree from './Component/SeactionS/SeactionThree'
import Review  from './Component/Review/Review'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Carousel />
    <Underline /> 
    <SectionOne />
    <Seaction />  {/* This is the Seaction component */}
    <Slider />
    <SectionTwo />
    <SeactionThree /> {/* This is the Seaction component */}
    <Review /> {/* This is the Review component */}
    <About /> {/* This is the About component */}
    <Footer /> {/* This is the Footer component */}
    </>
  )
}

export default App