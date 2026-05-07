const CountryCard = ({ countries, addFavorites }) => {
    return (
        <>
            {/* Mostra una card per ogni paese trovato */}
            {countries.map((country) => (
                <div key={country.cca3} className="border rounded p-3 mb-3">
                    <h3>{country.name.common}</h3>

                    <p>
                        <strong>Capitale:</strong> {country.capital}
                    </p>

                    <p>
                        <strong>Regione:</strong> {country.region}
                    </p>

                    <img
                        src={country.flags.png}
                        alt={country.flags.alt}
                        width="120"
                    />

                    <br />

                    <button
                        className="btn btn-success mt-3"
                        onClick={() => addFavorites(country)}
                    >
                        Aggiungi ai preferiti
                    </button>
                </div>
            ))}
        </>
    )
}

export default CountryCard
