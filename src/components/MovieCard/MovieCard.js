import React from "react";
// import Rating from "../Rating/Rating";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import { connect } from "react-redux";
import { DeleteMovie } from "../../actions/MoviesActions";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, deleteM }) => {
  return (
    <div>
      <div className="movie-card">
        <div className="movie-rating">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movie.rating}
          />
        </div>
        <img src={movie.image} />
        <div className="movie-description">
          {movie.name} <br /> {movie.year}
        </div>
      </div>
      <div>
        <button onClick={() => deleteM(movie.id)}>Remove</button>
        <Link to={`/movie/${movie.id}`}>
          <button>Description</button>
        </Link>
        <AddMovieModal editMode={true} movieToEdit={movie} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteM: id => dispatch(DeleteMovie(id))
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
