import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useSelector } from "react-redux";

function Main() {
  const movies = useSelector((state) => state.movies.movies);
  const [searchValue, setSearchValue] = useState("");
  const [localStateMovies, setLocalStateMovies] = useState([]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue.length >= 3) {
      const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setLocalStateMovies(filteredMovies);
    } else {
      setLocalStateMovies(movies);
    }
  }, [movies, searchValue]);

  const styles = {
    container: {
      width: "70%",
      padding: "50px",
    },
    empty: {
      width: "70%",
      padding: "50px",
      textAlign: "center",
    },
  };

  if (!movies.length) return <p style={styles.empty}>There are no movies</p>;
  return (
    <div style={styles.container}>
      <Table
        movies={localStateMovies}
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Main;
