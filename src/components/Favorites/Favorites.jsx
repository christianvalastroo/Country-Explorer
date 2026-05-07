const Favorites = ({ favorites, removeFavorites }) => {
    return (
        <div className="mt-5">
            <h2>Preferiti ⭐</h2>

            {favorites.length === 0 && <p>Nessun paese nei preferiti.</p>}

            {/* Mostra i paesi salvati nei preferiti */}
            {favorites.map((country) => (
                <div key={country.cca3} className="border rounded p-3 mb-3">
                    <h4>{country.name.common}</h4>
                    <img
                        src={country.flags.png}
                        alt={country.flags.alt}
                        width="80"
                    />
                    <br />
                    <button
                        className="btn btn-danger mt-3"
                        onClick={() => removeFavorites(country)}
                    >
                        Rimuovi
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Favorites
