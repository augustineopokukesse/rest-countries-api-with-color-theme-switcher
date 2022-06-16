import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/all_Countries.scss";
import Filter from "./Filter";



const url = "https://restcountries.com/v2/all";

const Countries = () => {
  // setting state values
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [ region, setRegion ] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  console.log(filtered)
  console.log(region)

  // fetching data from the url
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    setIsLoading(false);
    // console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  // Create functions to search for countries
  // By name
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries)
    }
  }

  // const searchCountriesByRegion = (regionValue) => {
  //   setRegion(regionValue)
  //   if (region) {
  //     const filteredCountries = countries.filter((country) => country.region === region)
  //     setFiltered(filteredCountries);
  //   } else {
  //     setFiltered(countries)
  //   } 
  // }
  // By region
  const searchCountriesByRegion = (regionValue) => {
    setRegion(regionValue)
  }  

  useEffect(() => {
    const filteredCountries = countries.filter((country) => country.region === region)
       setFiltered(filteredCountries);
  }, [countries, region])

  //   Map over countires data and display every details needed
  return (
    <>
      {isLoading ? (
        <div className="loadingState">
          <h1> Loading ...</h1>
        </div>
      ) : (
        <>
          <Filter 
            searchCountries={searchCountries}
            searchInput={searchInput} 
            searchCountriesByRegion={searchCountriesByRegion}
            region={region} 
          />
          {(searchInput.length > 0 || region) ? <section className="grid-container">
            {filtered.map((country) => {
              const { numericCode, name, population, region, capital, flag } = country;

              return (
                <Link to={`/countries/${name}`} className="linkStyle darktheme">
                  <article key={numericCode}>
                    <div className="countries darktheme">
                      <div className="country-flag">
                        <img src={flag} alt={name} />
                      </div>
                      <div className="country-info">
                        <h3>{name}</h3>
                        <h4>
                          <strong>Population</strong>: <span>{population}</span>
                        </h4>
                        <h4>
                          <strong>Region</strong>: <span>{region}</span>
                        </h4>
                        <h4>
                          <strong>Capital</strong>: <span>{capital}</span>
                        </h4>
                        
                      </div>
                    </div>
                  </article>
                </Link>
              );
          } )}
      </section> : <section className="grid-container">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } = country;

          return (
            <Link to={`/countries/${name}`} className="linkStyle darktheme">
              <article key={numericCode}>
                <div className="countries darktheme">
                  <div className="country-flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="country-info">
                    <h3>{name}</h3>
                    <h4>
                      <strong>Population</strong>: <span>{population}</span>
                    </h4>
                    <h4>
                      <strong>Region</strong>: <span>{region}</span>
                    </h4>
                    <h4>
                      <strong>Capital</strong>: <span>{capital}</span>
                    </h4>
                    
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>}
        </>
      )}
    </>
  );
};

export default Countries;
