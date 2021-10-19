const Movie = ({movie}) => {
    return (
        <>
        <section className="movie">
            <img src={movie.Poster} />
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
        </section>
        </>
    )
}

export default Movie;