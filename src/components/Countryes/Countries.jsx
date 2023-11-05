import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlag] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res =>res.json())
            .then(data => setCountries(data))
    },[])

    const handlevistiedCountry = country =>{
        console.log('add this to your visited country')
        const newVisitedCountries = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountries);
    }

    const handlevisitedFlag = flag =>{
        console.log('flag adding')
        const newVistedFlag = [...visitedFlags, flag];
        setVisitedFlag(newVistedFlag)
    }

    return (
        <div>
            
            <h3>countries : {countries.length} </h3>
            {/* visited country */}
            <div>
                <h5>Visited countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} className="w-40" src= {flag}></img>)
                    }
            </div>

                    {/* display country */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handlevistiedCountry={handlevistiedCountry}
                        handlevisitedFlag= {handlevisitedFlag}
                        country={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;