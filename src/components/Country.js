import { useState, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/country.scss";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  //   fetching data from url
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      //   console.log(country);
    };

    fetchCountry();
  });

  //   render infromation on page
  return (
    <>
      <div className="back-link">
      <Link to="/" className="link"><span className="link-text darktheme">Back</span></Link>
      </div>
      <section className="country-container">
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <article key={numericCode} className="country">
              <div className="flag">
                <img src={flag} alt={name}></img>
              </div>
              {/* divs */}
              <div className="country-details">
                <div className="country-name">
                  <h2>{name}</h2>
                </div>
                <div className="details">
                  <div>
                    <h5>
                      Native Name: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{population}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies[0].name}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
                <div className="border-details">
                  <h3>Border Countries: {borders}</h3>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
