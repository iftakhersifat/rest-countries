import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);

    const [visitedCountry, setVisitedCountry] = useState([]);
    const handelVisitedCountry =(country)=>{
        const countVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(countVisitedCountry);
    }

    const [visitedFlags, setVisitedFlags] = useState([]);
    const handelVisitedFlags = (country)=>{
        const countFlags = [...visitedFlags, country];
        setVisitedFlags(countFlags);
    }
    return (
        <div className='font'>
            <h1>Country List : {countries.length}</h1>
            <h3>Count Visited Country: {visitedCountry.length}</h3>
            <ol>
                {
                    visitedCountry.map(country => <ul>{country.name.common}</ul>)
                }
            </ol>
            <h3>Visited Flags : {visitedFlags.length}</h3>
            <div>
                {
                    visitedFlags.map(flags=> <img src={flags}></img>)
                }
            </div>
            <div className='visited'>
            {
                countries.map(country=> <Country
                     key={country.cca2}
                     handelVisitedCountry={handelVisitedCountry}
                     handelVisitedFlags={handelVisitedFlags}
                     country={country}>
                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;