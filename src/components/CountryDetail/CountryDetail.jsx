import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* optional : single 1 ba 2 ta data hole a way use korbo*/}
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            
</CountryData> */}
          {/* Easy Niom */}
          <CountryData {...props}></CountryData>

        </div>
    );
};

export default CountryDetail;