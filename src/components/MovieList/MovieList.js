import React, { Component } from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import { connect } from "react-redux";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="movieList">
        {this.props.AllData.movies
          .filter(
            el =>
              el.rating >= this.props.AllData.rating &&
              el.name
                .toLowerCase()
                .includes(this.props.AllData.keyword.trim().toLowerCase())
          )
          .map(el => (
            <MovieCard movie={el} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AllData: state.MovieReducer
  };
};

export default connect(mapStateToProps)(MovieList);

{
  /* .filter(
            el =>
              el.name
                .toLowerCase()
                .indexOf(this.props.movies.filters.text.toLowerCase().trim()) >
                -1 && el.rating >= this.props.movies.filters.rating
          ) */
}

{
  /* .filter(
            el =>
              el.rating >= this.props.allData.rating &&
              el.name
                .toUpperCase()
                .includes(this.props.allData.keyword.trim().toUpperCase())
          ) */
}
