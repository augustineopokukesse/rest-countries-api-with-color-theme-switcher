import "../styles/filter.scss"

function Filter({searchCountries, searchInput}) {
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
            </div>
        </>
    )
}

export default Filter;