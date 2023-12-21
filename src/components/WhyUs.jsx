import React from 'react'
import './whyUs.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyUs = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          
        ]
      };

    return (
        <section className='whyUs'>
            <div className="container">
                <h1 className='common_h1'>Why Us</h1>
                {/* <div className="whyUs_cards__wrapper"> */}
                <div>

                    <Slider {...settings}>
                        <div className="card">
                            <h2>1</h2>
                            <p>Skin friendly and dark color mehendi - We make the henna paste with 100% natural heena powder, lemon juice and essential oils but still deliver great color and shade.</p>
                        </div>
                        <div className="card">
                            <h2>2</h2>
                            <p>We have artists with expertise in many types of mehendi patterns, most popular ones being the Arabic and Rajasthani designs.</p>
                        </div>
                        <div className="card">
                            <h2>3</h2>
                            <p>Customized price range for all. Easy, affordable and reliable, we offer tremendous value to customers at a reasonable prices</p>
                        </div>
                        <div className="card">
                            <h2>4</h2>
                            <p>We Have evolved the traditional patterns of mehendi into intricate and decorative designs.</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
