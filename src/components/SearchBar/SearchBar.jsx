const SearchBar = ({ search, setSearch, getCountries }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Cerca un paese..."
                className="form-control mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button
                className="btn btn-dark w-100"
                onClick={getCountries}
            >
                Search
            </button>
        </>
    )
}

export default SearchBar