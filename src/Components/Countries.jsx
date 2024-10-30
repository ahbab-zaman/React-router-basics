import { useEffect, useState } from "react";
import Country from "./Country";
const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1>All Countries: {countries.length}</h1>
            <div className="grid grid-cols-4">
                {
                    countries.map(country=> <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;