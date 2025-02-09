import React from "react";
import "./Description.css"; // Ensure this file exists for styling
import aboutImage from "../assets/consult.png"; // Replace with actual image path

const Desciption = () => {
    return (
        <div className="about-container2">
            <div className="about-content2">
                <div className="image-section2">
                    <img src={aboutImage} alt="Consultation2" />
                </div>
                <div className="description-section2">
                    <div className="description-box2">
                        <p>
                            We take pride in helping applicants like you to follow through your dream of going abroad for education or settling abroad for better opportunities. We strive hard to understand your needs and aspirations to offer you trustworthy and reliable guidance.
                        </p>
                    </div>
                    <div className="description-box2">
                        <p>
                            We try to make the process of Immigration easy and hassle free for our clients by offering expert advice derived from our years of experience. We offer best level services because we believe in building relations with our clients for a long time.
                        </p>
                    </div>
                    <div className="description-box2">
                        <p>
                            As the top consultancy in Ahmedabad, who are searching for migration as settle in abroad are offered restrictive advantages and plans like free medical care, government-managed retirement, joblessness benefits, and so forth alongside the option to guarantee citizenship inside years.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desciption;
