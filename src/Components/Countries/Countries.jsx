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
    return (
        <div>
            <h1>Country List : {countries.length}</h1>
            <h3>Count Visited Country: {visitedCountry.length}</h3>
            <div className='visited'>
            {
                countries.map(country=> <Country
                     key={country.cca2}
                     handelVisitedCountry={handelVisitedCountry}
                     country={country}>
                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;