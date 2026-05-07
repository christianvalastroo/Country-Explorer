import { useState } from "react"
import { Container } from "react-bootstrap"
import SearchBar from "./components/SearchBar/SearchBar"
import CountryCard from "./components/CountryCard/CountryCard"

const App = () => {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])

  const getCountries = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
      const data = await response.json()
      setCountries(data)

    } catch (error) {
      setError("Errore nel caricamento")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

    const addFavorites = (country) => {
      setFavorites([...favorites, country])
    }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Country Explorer 🌍</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        getCountries={getCountries}
      />

      <p>Stai cercando: {search}</p>

      <CountryCard 
      countries={countries}
      addFavorites={addFavorites}
      />

    </Container>
  )
}

export default App