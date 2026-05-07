import { useState } from "react"
import { Container } from "react-bootstrap"
import SearchBar from "./components/SearchBar/SearchBar"

const App = () => {

  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])

const getCountries = async () => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${search}`
    )

    const data = await response.json()

    setCountries(data)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Country Exsplorer 🌍</h1>

      <SearchBar
      search={search}
      setSearch={setSearch}
      getCountries={getCountries}
      
      />

      <p>Stai cercando: {search}</p>
    </Container>
  )
}

export default App
