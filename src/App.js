import { useState } from "react";

import MoviesList from "./MoviesList";
import NavBar from "./NavBar";
import Watched from "./Watched";

import { tempMovieData } from "./tempData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} />
      <main className="main">
        <MoviesList movies={movies} />
        <Watched />
      </main>
    </>
  );
}
