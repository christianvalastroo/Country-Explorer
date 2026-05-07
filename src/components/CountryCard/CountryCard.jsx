const CountryCard = ({ countries }) => {
    return (
        <>
            {countries.map((country) => (
                <div
                    key={country.cca3}
                    className="border rounded p-3 mb-3"
                >
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
                </div>
            ))}
        </>
    )
}

export default CountryCard