import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((moviesData) => {
        setMovies(moviesData.movies);
      });
  }, []);
  return (
    <>
      <h1>Movie Ratings</h1>
      {movies === null ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie) => <div key={movie.movie_id}>{movie.title}</div>)
      )}
    </>
  );
}

export default App;
