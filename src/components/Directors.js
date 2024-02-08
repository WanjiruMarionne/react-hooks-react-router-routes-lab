import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>{/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director,index) => (
        <div className="Directors" key={index}>
          <h3>Name:{director.name}</h3>
            <ul>
              {director.movies.map ((movie,movieIndex) =>
              <li key={movieIndex}>
                {movie}
              </li>
              )}
            </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
