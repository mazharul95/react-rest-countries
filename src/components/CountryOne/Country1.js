import React from 'react';
import './Country.css';
const Country1 = (props) => {
    
    const {area, region, name,flags, population} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country1;