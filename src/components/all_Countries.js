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
  const [isLoading, setIsLoading] = useState(true);

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

  // Create function to search for countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  //   Map over countires data and display every details needed
  return (
    <>
      {isLoading ? (
        <div className="loadingState">
          <h1> Loading ...</h1>
        </div>
      ) : (
        <>
          <Filter searchCountries={searchCountries} searchInput={searchInput} />
          {searchInput.length > 0 ? <section className="grid-container">
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
