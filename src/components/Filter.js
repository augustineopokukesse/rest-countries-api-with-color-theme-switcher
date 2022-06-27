import "../styles/filter.scss";

function Filter({searchCountries, searchInput, searchCountriesByRegion, region}) {
     
    return (
        <>
            <div className="filter">
                <input 
                className="nameSearch"
                type="search" 
                name="search"
                id="search"
                placeholder="Search by country name"
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                autoComplete="off"
                />

                <select 
                    className="regionFilter"
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