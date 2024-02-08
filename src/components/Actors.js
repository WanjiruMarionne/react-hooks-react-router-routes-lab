import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor,index) => (
        <div className="actors" key={index}>
          <h3>Name:{actor.name}</h3>
          <ul>
            {actor.movies.map((movie,movieIndex) => (
              <li key={movieIndex}>
                {movie}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
