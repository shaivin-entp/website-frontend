import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle scrolling with offset
    const scrollToSection = (id) => {
        if (location.pathname !== "/home") {
            navigate("/home"); // Navigate to home first
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 70, // Offset for header height
                        behavior: "smooth",
                    });
                }
            }, 500);
        } else {
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 70, // Offset for header height
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <header className="header2">
            <div className="logo2">
                <img src="/assets/logo1.png" alt="Shavin Enterprise" />
            </div>
            <nav>
                <ul className="nav-links2">
                    <li><button onClick={() => scrollToSection("hero")}>Home</button></li>
                    <li><button onClick={() => scrollToSection("countries")}>Countries</button></li>
                    <li><button onClick={() => scrollToSection("about")}>About</button></li>
                    <li><button onClick={() => scrollToSection("contact")}>Get In Touch</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
