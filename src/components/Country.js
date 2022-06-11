import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
};
