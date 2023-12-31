import React from 'react'
import Navbar from './Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import WhatsAppButton from './components/WhatsAppButton'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutUs />
            <WhyUs />
            <Gallery />
            <Videos />
            <WhatsAppButton />
        </>
    )
}

export default HomePage
