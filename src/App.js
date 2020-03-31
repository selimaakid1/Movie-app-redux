import React from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieModal from "./components/AddMovieModal/AddMovieModal";
import Filter from "./components/filter/Filter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filter />
        <MovieList />
        <AddMovieModal editMode={false} />
      </header>
    </div>
  );
}

export default App;
