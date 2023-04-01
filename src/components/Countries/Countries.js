import React, { useEffect, useState } from 'react';

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
              countries.map(country => <Countries name={country.name.common} population={country.population}></Countries>)
            }
        </div>
    );
};
export default Countries;