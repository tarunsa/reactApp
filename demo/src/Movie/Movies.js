import React from "react";
import Movie from "../Movie/Movie.jsx";
import "../Movie/style.css";
export default class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };
  componentDidMount() {
    alert("hello");
  }

  render() {
    return (
      <div className="movie-section">
        {this.getMovie(
          "Red",
          "1M",
          "https://www.filmibeat.com/ph-big/2020/05/red-2019_15895177522.jpg"
        )}
        <Movie
          name="Maharshi"
          likes="123.0k"
          banner="https://www.filmibeat.com/ph-big/2019/05/maharshi_155729459210.jpg"
        />
        <Movie
          name="AravindaSametha"
          likes="123.0k"
          banner="https://www.filmibeat.com/wimgm/1366x70/desktop/2018/10/xaravinda-sametha_153914975950.jpg.pagespeed.ic.IQQxISW33a.jpg"
        />
        <Movie
          name="Jai Balayya"
          likes="123.0k"
          banner="https://www.filmibeat.com/ph-big/2020/06/bb3_159176410900.jpg"
        />
      </div>
    );
  }
}
