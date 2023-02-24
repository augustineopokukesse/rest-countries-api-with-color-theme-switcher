import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../styles/borderCountries.scss";

const url = "https://restcountries.com/v2/all"; 

function Borders(props) {
    const [countries, setCountries] = useState([]);
    const borderCountries = props.borders;
    //console.log(borderCountries);

    const fetchCountries = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        
    };
    useEffect(() => {
    fetchCountries();
    }, []);
    //console.log(countries);

    return (
        <>
            <section className="border-details">
                {countries.filter((country) => borderCountries.includes(country.alpha3Code))
                    .map(selectedCountry => {
                        const { name } = selectedCountry;
                        return (
                            <Link to={`/countries/${name}`} className="border-links">
                                <ul key={name}>
                                    <li>{name}</li>
                                </ul>
                            </Link>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Borders;