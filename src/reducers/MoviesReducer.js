import uuid from "uuid";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  GET_KEYWORD,
  GET_RATING
} from "../actions/types";

const initState = [
  {
    id: uuid(),
    name: "inception",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/e8/01/39/e8013988-4dad-2282-8d04-3767b35879da/pr_source.lsr/268x0w.png",
    rating: 4,
    year: "2005",
    description:
      "Inception ou Origine gau Québec et au Nouveau-Brunswick, est un thriller de science-fiction américano-britannique écrit, réalisé et produit par Christopher Nolan, sorti en 2010."
  },
  {
    id: uuid(),
    name: "harry potter",
    image:
      "http://media.paperblog.fr/i/387/3876398/harry-potter-reliques-mort-1ere-partie-harry--L-OOKDza.jpeg",
    rating: 5,
    year: "2013",
    description:
      "Harry Potter [ʔaʁi pɔtœʁ]a (en anglais : [ˈhæɹi ˈpɒtə]b) est une série littéraire de fantasy écrite par l'auteure britannique J. K. Rowling, dont la suite romanesque s'est achevée en 2007. Une pièce de théâtre, considérée comme la « huitième histoire » officielle, a été jouée et publiée en 2016. Les livres et le script de la pièce ont été traduits en français par Jean-François Ménard."
  },
  {
    id: uuid(),
    name: "fantastic beasts",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png/220px-Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png",
    rating: 3,
    year: "2016",
    description:
      "Les Animaux fantastiques (Fantastic Beasts and Where to Find Them) est un film fantastique américano-britannique réalisé par David Yates, sorti en 2016. Le scénario est le premier écrit par la romancière J. K. Rowling, auteur des aventures de Harry Potter, et le film et ses suites prévues constituent une « extension du monde des sorciers » pour les personnes ayant eu connaissance de la saga originelle1. Il s'agit d'une œuvre sérielle dérivée, se focalisant sur plusieurs personnages secondaires mentionnés ou présents dans l'histoire de Harry Potter, et débutant soixante-cinq ans plus tô"
  }
];

const MovieReducer = (
  state = { movies: initState, keyword: "", rating: 1 },
  action
) => {
  switch (action.type) {
    case GET_KEYWORD:
      return { ...state, keyword: action.payload };
    case GET_RATING:
      return { ...state, rating: action.payload };
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== action.payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id
            ? { ...el, ...action.payload.upadatedMovie }
            : el
        )
      };
    default:
      return state;
  }
};
export default MovieReducer;
