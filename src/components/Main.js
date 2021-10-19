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
        return data.Search;
      } else {
        console.log("something went wrong")
        return null;
      }
    }

    useEffect(async () => {
      let response = await fetchMovies();
      const data = await response.splice(0,5);
      setMovies(data);
    }, [])

    return (
    <>
        <Search setSearch={setSearch}/>
        <br />
        <button className="buttonSearch" onClick={fetchMovies}>Search</button>
        <Movies movies={movies}/> 
    </>
    )
}

export default Main