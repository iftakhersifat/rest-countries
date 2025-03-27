import React from 'react';

const Country = ({ country }) => {
    console.log(country);
    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;