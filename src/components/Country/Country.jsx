import { useState } from 'react';
import './Country.css'
const Country = ({country, handlevistiedCountry}) => {
    const {name, flags, capital, population, area, cca3, independent  } = country;

    const [visited, setvisited] = useState(false)

    const handlevistied = ()=>{
        setvisited(!visited)
    }

    const passWithParams = () =>handlevistiedCountry(country)
    


    return (
        <div className={`country ${visited && 'visited'}` }>
           <img src= {flags.png} alt="" />
           <h2 className='text-xl' style={{color: visited ? 'purple': 'white'}}>Name: {name?.common} </h2> 
           <p>Area: {area} </p>
           <p>Capital: {capital} </p>
           <p>Population : {population} </p>
           <p><small>Code: {cca3} </small></p>
           <button onClick={()=>handlevistiedCountry(country)}>Mark Visited</button>
           <br />
           <button onClick={handlevistied}>{visited ? 'Visited': 'Going'}</button>
           {visited ? "I have visited this country" : "I want to visited"}

        </div>
    );
};

export default Country;

