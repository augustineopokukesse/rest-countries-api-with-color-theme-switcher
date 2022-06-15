import "../styles/filter.scss"
import {useState} from "react";

function Filter({searchCountries, searchInput}) {
    const [ region, setRegion ] = useState("");
    //const [ regionCountries, setRegionCountries] = useState([]);
    // const [ isLoading, setIsLoading ] = useState(true)

    // const region =[
    //     {
    //         name: "Africa"
    //     },
    //     {
    //         name: "Americas"
    //     },
    //     {
    //         name: "Asia"
    //     },
    //     {
    //         name: "Europe"
    //     },
    //     {
    //         name: "Oceania"
    //     },
    // ]

    

    // useEffect(() => {
    //     const fetchCountryByRegion = async() => {
    //         const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    //         const data = await response.json();
    //         setRegionCountries(data);
    //         console.log(regionCountries)
    //     } 
        
    //     fetchCountryByRegion()
    // }, [region])

    return (
        <>
            <div className="filter">
                <input 
                type="search" 
                name="search"
                id="search"
                placeholder="Search by country name"
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                autoComplete="off"
                />

                <select 
                    name="select" 
                    id="select" 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    >
                    <option value="" disabled>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </>
    )
}

export default Filter;