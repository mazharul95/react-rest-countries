import React from 'react';
import './Country.css';
const Country1 = (props) => {
    console.log(props.country);
    const {area, region, name, population} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p><small>Area: {area}</small></p>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country1;