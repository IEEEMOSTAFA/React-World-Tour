import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, population, area, cca3
    } = country;
    const [visited,setVisited] = useState(false);



    const handleVisited = () =>{
        setVisited(!visited);
    }

    
    
    const passWithParams = () =>{
        handleVisitedCountry(country);
    }
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'Black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area :{area}</p>
            <p><small>Code : {cca3
            }</small></p>
            <button style={{background: 'yellow', color:'black'}} onClick={passWithParams}>Mark Visited</button>
            <br />
            <button style={{background: 'purple', color:'black'}} onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited': 'non-visited'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;