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
                    <option className="opt" value="" disabled>Filter by Region</option>
                    <option className="opt" value="Africa">Africa</option>
                    <option className="opt" value="Americas">Americas</option>
                    <option className="opt" value="Asia">Asia</option>
                    <option className="opt" value="Europe">Europe</option>
                    <option className="opt" value="Oceania">Oceania</option>
                </select>
            </div>
        </>
    )
}

export default Filter;