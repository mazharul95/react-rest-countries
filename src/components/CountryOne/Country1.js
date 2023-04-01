import React from 'react';
import './Country.css';
const Country1 = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p><small>Area: {props.area}</small></p>
            <p><small>Region: {props.region}</small></p>
            <p><small>Population: {props.population}</small></p>
        </div>
    );
};

export default Country1;