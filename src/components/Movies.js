import Movie from "./Movie"

const Movies = ({movies}) => {
    return (
        <section className="movies">
            {movies?.length > 0 ? movies.map(movie => <Movie movie={movie}/>) : null}
        </section>
    )
}

export default Movies