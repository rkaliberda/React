import React from "react";
import Checkbox from "./Checkbox";
import { useDispatch } from "react-redux";
import { checkMovie } from "../redux/moviesSlice";
import Input from "./Input";
import { convertToHours } from "../utils/movies";

function Table({ movies, searchValue, onChange }) {
  const dispatch = useDispatch();

  const handleCheckboxChange = (movie) => {
    dispatch(checkMovie(movie));
  };

  const styles = {
    container: {
      width: "100%",
    },
    searchBlock: {
      width: "80%",
    },
    table: {
      border: "1px solid black",
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      border: "1px solid black",
      padding: "8px",
    },
    td: {
      border: "1px solid black",
      padding: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBlock}>
        <Input placeholder="Search" value={searchValue} onChange={onChange} />
      </div>
      {!movies.length ? (
        <p>No movies matching the search criteria</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Delete</th>
              <th style={styles.th}>Movie Name</th>
              <th style={styles.th}>Time Span</th>
              <th style={styles.th}>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.name + index + movie.rating}>
                <td style={styles.td}>
                  <Checkbox
                    checked={movie.isDelete}
                    onChange={() => handleCheckboxChange(movie)}
                  />
                </td>
                <td style={styles.td}>{movie.name}</td>
                <td style={styles.td}>{convertToHours(movie.timeSpan)}</td>
                <td style={styles.td}>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
