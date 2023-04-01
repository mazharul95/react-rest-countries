import React, { useEffect, useState } from 'react';
import Country1 from '../CountryOne/Country1';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
      },[])
    return (
        <div>
            <h2> Hello from Countries:{countries.length}</h2>
            {
              countries.map(country=> console.log(country))
            }
            {
              countries.map(country => <Country1 
                name={country.name.common}
                area ={country.area}
                region ={country.region}
                population={country.population}
              ></Country1>)
            }
        </div>
    );
};
export default Countries;