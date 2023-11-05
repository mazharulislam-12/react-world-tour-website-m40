import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res =>res.json())
            .then(data => setCountries(data))
    },[])

    const handlevistiedCountry = country =>{
        console.log('add this to your visited country')
        console.log(country)
    }

    return (
        <div>
            
            <h3>countries : {countries.length} </h3>
            <div>
                <h5>Visited countries</h5>
                <ul>
                    
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handlevistiedCountry={handlevistiedCountry}
                        country={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;