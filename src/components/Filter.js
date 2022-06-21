import "../styles/filter.scss"
//import {useState} from "react";

function Filter({searchCountries, searchInput, searchCountriesByRegion, region}) {
    
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
            <div className="filter darktheme">
                <input 
                className="nameSearch darktheme"
                type="search" 
                name="search"
                id="search"
                placeholder="Search by country name"
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                autoComplete="off"
                />

                <select 
                    className="regionFilter darktheme"
                    name="select" 
                    id="select" 
                    value={region}
                    onChange={(e) => searchCountriesByRegion(e.target.value)}
                    >
                    <option value="" disabled>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </>
    )
}

export default Filter;