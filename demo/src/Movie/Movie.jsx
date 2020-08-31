import * as React from "react";
import "../Movie/style.css";
function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.banner} />
      <br />
      <br />
      <label>
        {props.likes}
        {props.name}
      </label>
    </div>
  );
}
export default Movie;
