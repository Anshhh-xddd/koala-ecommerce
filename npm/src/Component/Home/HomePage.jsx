import React from 'react';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar';
import Carousel from '../Corosoual/Carousel';
import Underline from '../Corosoual/Underline';
import SectionOne from '../SeactionS/SeactionOne';
import Section from '../SeactionS/Seaction'; // Corrected typo: Seaction → Section
import SectionTwo from '../SeactionS/SeactionTwo';
import Slider from '../SeactionS/Slider';
import SectionThree from '../SeactionS/SeactionThree';
import Review from '../Review/Review';
import About from '../About/About';
import Footer from '../Footer/Footer';

// Uncomment and adjust if you need these components in the future
// import AddToCart from './Component/ExternalComp/AddToCart';
// import NavInner from './Component/ExternalComp/NavInner';
// import Inner from './Component/ExternalComp/Inner';
// import Card from './Component/ExternalComp/Card';
// import Aboutinn from './Component/ExternalComp/Aboutinn';
// import Aibutton from './Component/ExternalComp/Aibutton';

const HomePage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Carousel />
            <Underline />
            <SectionOne />
            <Section /> {/* Corrected component name */}
            <Slider />
            <SectionTwo />
            <SectionThree /> {/* Corrected component name */}
            <Review />
            <About />
            <Footer />

            {/* Uncomment and use these components if necessary */}
            {/* <AddToCart /> */}
            {/* <NavInner /> */}
            {/* <Inner /> */}
            {/* <Card /> */}
            {/* <Aboutinn /> */}
            {/* <Aibutton /> */}
        </>
    );
};

export default HomePage;
