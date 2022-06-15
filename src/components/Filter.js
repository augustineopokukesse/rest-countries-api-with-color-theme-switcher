function Filter({searchCountries, searchInput}) {
    return (
        <>
            <input 
              type="search" 
              name="search"
              id="search"
              placeholder="Search by country name"
              value={searchInput}
              onChange={(e) => searchCountries(e.target.value)}
            />
        </>
    )
}

export default Filter;