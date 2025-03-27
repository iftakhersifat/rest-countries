import React from 'react';

const Country = ({ country }) => {
    console.log(country);
    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            <h3>Capital: {country.capital}</h3>
            
        </div>
    );
};

export default Country;