import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { getKeyword, getRating } from "../../actions/MoviesActions";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      text: ""
    };
  }
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.getRating(this.state.rating)
    );
  };
  handleChange = e => {
    this.setState(
      {
        text: e.target.value
      },
      () => this.props.setKeyword(this.state.text)
    );
  };
  render() {
    return (
      <Form>
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick}
        />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setKeyword: keyword => dispatch(getKeyword(keyword)),
    getRating: rating => dispatch(getRating(rating))
  };
};

export default connect(null, mapDispatchToProps)(Filter);
