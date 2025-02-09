import React from "react";
import "./Banner.css"; // Ensure this CSS file is created

const Banner = () => {
    return (
        <div className="banner-container">
            {/* Left Side - Question */}
            <div className="left-content">
                <h2>
                    <span className="highlight">Are you looking for a visa consultant</span> in Ahmedabad?
                </h2>
                <p>Need admittance to work visa or searching for migrate/work permit/study abroad etc.</p>
                <p className="call-section">
                    📞 <span className="call-now">Call Now:</span> <a href="tel:+91 8460595601">+91 8460595601 </a>
                </p>
            </div>

            {/* Right Side - Quote */}
            <div className="right-content">
                <blockquote>
                    <p><strong>"Shaivin Immigration"</strong></p>
                    <p>Delivering End-To-End Solutions In Immigration And IELTS Coaching</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Banner;
