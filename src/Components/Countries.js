import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Countries.css"; // Custom styling

const countries = [
    {
        name: "Canada",
        image: "/assets/canada.png",
    },
    {
        name: "Australia",
        image: "/assets/australia.png",
    },
    {
        name: "Singapore",
        image: "/assets/singapore.png",
    },
    {
        name: "United Kingdom",
        image: "/assets/uk.png",
    },
    {
        name: "United State",
        image: "/assets/usa.png",
    },
    {
        name: "New Zealand",
        image: "/assets/newzealand.png",
    },
    {
        name: "Europe",
        image: "/assets/europe.png",
    },
];

const Countries = () => {
    return (
        <div className="container">
            <div className="textheader">
                <h2 className="speciality-heading">Countries</h2>
                <h2 className="speciality-heading2">We Support for Immigration</h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {countries.map((country, index) => (
                    <SwiperSlide key={index}>
                        <div className="country-card">
                            <img src={country.image} alt={country.name} className="country-image" />
                            <div className="country-name">{country.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Countries;
