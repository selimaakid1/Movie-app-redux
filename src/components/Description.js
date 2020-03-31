import React, { Component } from "react";
// import Rating from "../Rating/Rating";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Description extends Component {
  state = {
    movie: {
      name: "",
      rating: 1,
      year: "",
      image: "",
      description: ""
    }
  };

  UNSAFE_componentWillMount() {
    this.setState({
      movie: this.props.movies.filter(
        el => el.id === this.props.match.params.id
      )[0]
    });
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="movie-card">
          <div className="movie-rating">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.movie.rating}
            />
          </div>
          <img src={this.state.movie.image} />
          <div className="movie-description">
            {this.state.movie.name} <br /> {this.state.movie.year}
          </div>
          <p>{this.state.movie.description}</p>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.MovieReducer.movies
  };
};

export default connect(mapStateToProps)(Description);
