import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const requestBody = { email, message };

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            });

            const result = await response.json();
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage("Something went wrong! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contactus">
            <div className="textheaders">
                <h2 className="speciality-heading">Contact</h2>
                <h2 className="speciality-heading2">Us</h2>
            </div>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="input-field textarea-field"
                        placeholder="Your message with your dream country"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="send-button" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default Contact;
