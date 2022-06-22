import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v2/all"; 

function Borders(borders) {
    const [countries, setCountries] = useState([])
    //console.log(borders.borders);
    const borderCountries = borders.borders;

    const fetchCountries = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        
    };
    useEffect(() => {
    fetchCountries();
    }, []);

    return (
        <>
            <section>
                {countries.filter((country) => borderCountries.includes(country["alpha3Code"]))
                    .map(selectedCountry => {
                        const { name } = selectedCountry;
                        return (
                            <Link to={`/${name}`}>
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