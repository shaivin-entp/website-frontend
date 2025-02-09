import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Speciality.css";

const Speciality = () => {
    const specialities = [
        {
            title: "BRING YOUR DREAM TO REALITY",
            description:
                "We have been counselling students for educational opportunities in foreign countries and have been helping them realize their dream of studying abroad.",
        },
        {
            title: "MAKE YOUR IMMIGRATION A STRESS FREE PROCESS",
            description:
                "We have experts with more than 8 years of experience. We give honest feedback and true guidance for settling abroad.",
        },
        {
            title: "WE MAKE THE THINGS PERFECT",
            description:
                "Trusted by our team and clients, we make sure your immigration process stays hassle and error-free.",
        },
    ];

    return (
        <div className="speciality-container">
            <div className="textheader">
                <h2 className="speciality-heading">Why</h2>
                <h2 className="speciality-heading2">Choose Us?</h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="speciality-swiper"
            >
                {specialities.map((item, index) => (
                    <SwiperSlide key={index} className="speciality-slide">
                        <div className="speciality-card">
                            <h3 className="speciality-title">{item.title}</h3>
                            <p className="speciality-description">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Speciality;
