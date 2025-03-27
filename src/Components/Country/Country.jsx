import React from 'react';

const Country = ({ country }) => {
    console.log(country);
    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            <h2>Capital: {country.capital}</h2>
            <h3>{country.independent ? "Yes" : "Not"} Independent Country</h3>
            <h4>Population: {country.population}</h4>
            
        </div>
    );
};

export default Country;