import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag , setVisitedFlag] = useState ([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,area,cca3")
      .then(res => res.json())
      .then(data => setCountries(data))

  }, []);


  const handleVisitedCountry = county => {
    console.log('add this to your visited country');
    
   const newVisitedCountry = [...visitedCountry, county]
    setVisitedCountry (newVisitedCountry);
  }

  const handleVisitedFlag = flag =>{
    const newVisitedflags = [...visitedFlag, flag]
    setVisitedFlag(newVisitedflags);
  }


  return (
    <div>
      {/* visited country */}
      <h3>Countries :{countries.length} </h3>

      <div>
        <h4>Visited countries :{visitedCountry.length} </h4>
        <ul>
          {
            visitedCountry.map (country => <li key ={country.cca3} >{country.name.common} </li>)
          }

        </ul>flag-container
      </div>

      <div className="flag-container">
        {
          visitedFlag.map((flag, idx) => <img key={idx} src={flag}></img>)
        }

      </div>
        {/* display countries */}
      <div className="country-container">
        {
          countries.map(country => <Country key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag = {handleVisitedFlag}

            country={country} > </Country>)
        }
      </div>

    </div>
  );
};

export default Countries;