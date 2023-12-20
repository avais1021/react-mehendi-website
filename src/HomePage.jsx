import React from 'react'
import Navbar from './Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import WhyUs from './components/WhyUs'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutUs />
            <WhyUs />
            <section>
                <div className="container">

                </div>
            </section>
        </>
    )
}

export default HomePage
