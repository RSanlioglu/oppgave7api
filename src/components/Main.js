import { useState, useEffect } from "react"
import Movies from "./Movies";
import Search from "./Search"


const Main = () => {
    const [search, setSearch] = useState('star wars');
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
      let url = `https://omdbapi.com/?apikey=97539a12&s=${search}`
      const response = await fetch(url);
      if(response.ok) {
        const data = await response.json();
        setMovies(data.Search);
      } else {
        console.log("something went wrong")
        return null;
      }
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
    <>
        <Search search={search} setSearch={setSearch}/>
        <button onClick={fetchMovies}>Search</button>
        <Movies movies={movies}/> 
    </>
    )
}

export default Main