import { useState } from 'react';
import './Country.css'
const Country = ({ country , handleVisitedCountry , handleVisitedFlag }) => {

    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams =() =>{
        handleVisitedCountry (country)
    }

    return (
        <div className={`country ${visited && 'visited'}`} >
            <h4> name: {name.official}  </h4>
            <img src={flags.png} alt="" />
            <p> Population {population}</p>
            <p>area :{area} </p>
            <p><small> Code : {cca3} </small></p>

            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add flags </button> <br />
            <button onClick={passWithParams}>Mark As visited :</button> <br />

            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Going'}
            </button>
            { visited && 'I have visit this country'}



        </div>
    );
};

export default Country;


