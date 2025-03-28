import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handelVisitedCountry,handelVisitedFlags }) => {
    console.log(country);

    const [visited, setVisited] =useState(false);

    const handelVisitButton =()=>{
        // default set up
        // setVisited(true);

        if(visited){ setVisited(false) }
        else { setVisited(true) }

        handelVisitedCountry(country);
        handelVisitedFlags(country.flags.png)
    }

    return (
        <div className={`country ${visited && 'card-bg'}`}>
            <h1 className='country-name'>{country.name.common}</h1>
            <img className='img' src={country.flags.png} alt="" />
            <h2>Capital: {country.capital}</h2>
            <h3>{country.independent ? "Yes" : "Not"} Independent Country</h3>
            <h4>Population: {country.population}</h4>
            <h4>Region: {country.region}</h4>
            <button className='button' onClick={handelVisitButton}>{
                visited ? "Visited" : "Not Visited"
            }</button>
        </div>
    );
};

export default Country;