import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountry();
  });

  return (
    <>
      <h1>Country Data</h1>
    </>
  );
};

export default Country;
