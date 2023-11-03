import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, capital, population, area, cca3, independent  } = country;

    const [visited, setvisited] = useState(false)

    const handlevistied = ()=>{
        setvisited(!visited)
    }


    return (
        <div className='country'>
           <img src= {flags.png} alt="" />
           <h3>Name: {name?.common} </h3> 
           <p>Area: {area} </p>
           <p>Capital: {capital} </p>
           <p>Population : {population} </p>
           <p><small>Code: {cca3} </small></p>
           <button onClick={handlevistied}>{visited ? 'Visited': 'Going'}</button>
           {visited ? "I have visited this country" : "I want to visited"}

        </div>
    );
};

export default Country;