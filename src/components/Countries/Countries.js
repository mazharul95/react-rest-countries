import React, { useEffect, useState } from 'react';
import Country1 from '../CountryOne/Country1';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
      },[])
    return (
        <div>
            <h2> Hello, from the total Countries: {countries.length}</h2>
            <div className='countries-container'>
            {
              countries.map(country => <Country1 country={country} key={country.cca3}> </Country1>)
            }
            </div>
        </div>
    );
};
export default Countries;