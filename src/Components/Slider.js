import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            <div><img src="https://via.placeholder.com/200" alt="USA" /></div>
            <div><img src="https://via.placeholder.com/200" alt="Australia" /></div>
            <div><img src="https://via.placeholder.com/200" alt="Dubai" /></div>
        </Slider>
    );
}

export default ImageSlider;
