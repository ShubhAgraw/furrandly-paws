import React from 'react';

import NavbarHomePage from './NavbarHomePage'
import Features from './Features'
import CarouselHomePage from './CarouselHomePage'
import CardsHomePage from "./CardsHomePage"
import CTA from "./CTA"
import Footer from "./Footer"

function HomePage(){
    return (
        <div>
            <NavbarHomePage/>
            <Features/>
            <CarouselHomePage/>
            <CardsHomePage/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default HomePage;
