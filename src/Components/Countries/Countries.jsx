import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>Country List : {countries.length}</h1>
            <div className='visited'>
            {
                countries.map(country=> <Country
                     key={country.cca2}
                     country={country}>
                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;