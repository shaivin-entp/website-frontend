import React from "react";

const CountryCard = ({ country, onClick }) => {
    return (
        <div
            className="country-card"
            onClick={() => onClick(country)}
            style={{ backgroundImage: `url(${country.image})` }}
        >
            {/* Country Name Overlay */}
            <div className="country-name">{country.name}</div>
        </div>
    );
};

export default CountryCard;
