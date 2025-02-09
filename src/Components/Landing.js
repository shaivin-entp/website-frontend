import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import ShaivinImmegration from '../assets/SI.png'; // Import the reliability logo
import ShaivinConsultancy from '../assets/SC.png'; // Import the reliability logo
import ShaivinEnterprise from '../assets/SE.png'; // Import the reliability logo


function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };
    const services = [
        "Canada PR",
        "Australia PR",
        "Student Visa",
        "Family Visa",
        "Super Visa For Parents & Grandparents - Canada",
        "Visitor Visa",
        "Refusal Cases",
    ];

    const countries = ["Australia", "United Kingdom", "Canada", "United States of America", "New Zealand"];
    const links = [
        "Home", "About Us", "Services", "Country", "Courses", "Event",
        "News", "Testimonials", "Videos", "Success Stories", "Contact Us",
    ];

    return (
        <div className="App">
            {/* Header Section */}
            <header className="header">
                <div className="header-left">
                    <img src={ShaivinEnterprise} alt="Logo" className="logo" />
                </div>
                <div className="header-right">
                    <a href="mailto:info@example.com" className="email-link">
                        Email: shaivinenterprise@gmail.com
                    </a>
                    <a href="tel:+91 8460595601"  className="call-link">
                        Call: +91 8460595601 
                    </a>

                </div>
            </header>


            {/* Split Section */}
            <div className="split-container">
                <div className="split left">
                    <div className="content">
                        <h1>SHAIVIN IMMIGRATION</h1>
                        <img src={ShaivinImmegration} alt="Reliability Logo" className="section-logo" />
                        <p className="gold">
                            Delivering End-To-End Solutions In Immigration And IELTS Coaching
                        </p>
                        <a href="#oem-accounts" className="btn btn-gold" onClick={handleClick} ><span>Click here to Visit</span></a>
                    </div>
                </div>
                <div className="split right">
                    <div className="content">
                        <h1>SHAIVIN CAPITAL FINANCE</h1>
                        <img src={ShaivinConsultancy} alt="Shop Now Logo" className="section-logo" />
                        <p className="grey">
                            Delivering End-To-End Solutions In Capital And Finance
                        </p>
                        <a href="#oem-accounts" className="btn"><span>Click here to Visit</span></a>
                    </div>
                </div>
            </div>


            {/* Footer Section */}
            <footer className="footer-container">
                {/* Services Section */}
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}><a href="#">{service}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Countries Section */}
                <div className="footer-section">
                    <h3>Country</h3>
                    <ul>
                        {countries.map((country, index) => (
                            <li key={index}><a href="#">{country}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Links Section */}
                <div className="footer-section">
                    <h3>Links</h3>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}><a href="#">{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section contact">
                    <h3>Contact</h3>
                    <address>
                        411 Sunrise Mall,<br />
                       Nr. Swaminarayan Temple <br />
                       Vastrapur ,Ahmedabad-380015 <br />
                        Gujarat, India
                    </address>
                    <h3>Email: <a href="mailto:shaivinenterprise@gmail.com" style={{ color: "White" }}>shaivinenterprise@gmail.com</a></h3>
                    <h3>Phone: +91 8460595601 </h3>
                    <h4>Open Time</h4>
                    <h3>Monday - Saturday: 10:00 to 07:00 pm</h3>
                    

                </div>
            </footer>
        </div>
    );
}

export default Landing;

