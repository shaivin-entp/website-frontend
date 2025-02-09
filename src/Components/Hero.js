import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Ensure this file exists for styling

// Import images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

// Slider data
const slides = [
    { img: image1, text: "GET YOUR PASSPORT AND VISA HASSLE-FREE WITH US" },
    { img: image2, text: "ENJOY A SMOOTH ONBOARDING & FLIGHT EXPERIENCE WITH OUR EXPERT SUPPORT" },
    { img: image3, text: "TAKE OFF TO NEW DESTINATIONS WITH EASE & COMFORT" },
    { img: image4, text: "IMMIGRATE WITH EASE THE WHOLE WORLD AWAITS YOU!" }
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        ❯
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        ❮
    </div>
);

const Hero = () => {
    const location = useLocation(); // Detect route changes

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="hero-container">
            {/* Force reinitialization when route changes */}
            <Slider key={location.pathname} {...settings}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="image-wrapper">
                            <img src={slide.img} alt={`Slide ${index + 1}`} />
                            <div className="overlay"></div>
                        </div>
                        <div className="text">
                            <h2>{slide.text}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
