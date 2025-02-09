import React from "react";
import "./About.css"; // Import styles

const About = () => {
    return (
        <footer className="footer-container2">
            <div className="footer-content2">
                <h2 className="footer-title2">Shaivin Immigration</h2>
                <p className="footer-subtitle2">We are an Immigration consultant</p>
                <p className="footer-text2">
                    Once you have decided that you are comfortable with our assessment, we will provide you with a complete breakdown of all service fees from beginning to end with no hidden fees!
                    We also offer flexible payment plans, and you don't pay anything more.
                </p>
                <ul className="footer-list2">
                    <li>✔ Talk to one of our best consultants today</li>
                    <li>✔ Our experts are able to find new growth</li>
                    <li>📞 Contact Detail: +91 XXXXXXXX</li>
                    <li>📍 Address: Ahmedabad</li>
                </ul>
            </div>
            <div className="footer-bottom2">
                <p>© {new Date().getFullYear()} Shaivin Immigration. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default About;
