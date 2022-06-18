import { useState, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/country.scss";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  //   fetching data from url
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      setIsLoading(false);
      //   console.log(country);
    };

    fetchCountry();
  });

  //   render infromation on page
  return (
    <>
      <div className="back-link">
        <Link to="/" className="link">
          &larr; <span className="link-text darktheme">Back</span>
        </Link>
      </div>
      {isLoading ? (
        <div className="loadingState">
          <h1>Loading ...</h1>
        </div>
      ) : (
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
                    <div className="block1">
                      <h5>
                        Native Name:{" "}
                        <span className="info-text">{nativeName}</span>
                      </h5>
                      <h5>
                        Population:{" "}
                        <span className="info-text">{population}</span>
                      </h5>
                      <h5>
                        Region: <span className="info-text">{region}</span>
                      </h5>
                      <h5>
                        Sub Region:{" "}
                        <span className="info-text">{subregion}</span>
                      </h5>
                      <h5>
                        Capital: <span className="info-text">{capital}</span>
                      </h5>
                    </div>
                    <div className="block2">
                      <h5>
                        Top Level Domain:{" "}
                        <span className="info-text">{topLevelDomain}</span>
                      </h5>
                      <h5>
                        Currencies:{" "}
                        <span className="info-text">{currencies[0].name}</span>
                      </h5>
                      <h5>
                        Languages:{" "}
                        <span className="info-text">{languages[0].name}</span>
                      </h5>
                    </div>
                  </div>
                  <div className="border-details">
                    <h3>Border Countries:</h3>
                    {borders.map((b) => {
                      return (
                        <Link to={`/${b}`}>
                          <ul key={b}>
                            <li>{b}</li>
                          </ul>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Country;
