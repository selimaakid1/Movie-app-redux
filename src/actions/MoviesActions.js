import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  GET_KEYWORD,
  GET_RATING
} from "./types";

export const AddMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  };
};
export const DeleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};
export const EditMovie = (id, upadatedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: { id, upadatedMovie }
  };
};
export const getKeyword = keyword => {
  return {
    type: GET_KEYWORD,
    payload: keyword
  };
};
export const getRating = rating => {
  return {
    type: GET_RATING,
    payload: rating
  };
};
