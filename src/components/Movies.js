import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>{/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map((movie,index) => (
        <div className="movies" key={index}>
          <h3>Title:{movie.title}</h3>
          <h4>Time:{movie.time} minutes</h4>
            <ul>
              {movie.genres.map((genre,genreIndex) => (
                <li key={genreIndex}>
                  {genre}
                </li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
