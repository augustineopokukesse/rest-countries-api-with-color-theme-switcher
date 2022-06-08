import React, { useState, useEffect } from "react";
import "../styles/all_Countries.scss"

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  // setting state values
  const [countries, setCountries] = useState([]);

  // fetching data from the url
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    // console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  //   Map over countires data and display every details needed
  return (
    <>
      <section className="grid-container">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;

          return (
            <article key={numericCode}>
              <div className="countries">
                <img src={flag} alt={name} />
                <h3>{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
