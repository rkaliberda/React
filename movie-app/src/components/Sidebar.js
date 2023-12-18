import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addMovie, deleteCheckedMovies } from '../redux/moviesSlice';
import { validationErrors } from '../utils/validation';

function Sidebar() {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    isDelete: false,
    name: "",
    timeSpan: "",
    rating: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setMovie((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleAddMovie = () => {
    const errors = validationErrors(movie);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    dispatch(addMovie(movie));
    setMovie({
      isDelete: false,
      name: "",
      timeSpan: "",
      rating: "",
    });
  };

  const handleDeleteMovies = () => {
    dispatch(deleteCheckedMovies())
  };

  const styles = {
    container: {
      width: "30%",
      padding: "50px"
    },
    inputsBlock: {
      paddingBottom: "30px"
    },
    buttonsBlock: {
      width: "50%"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputsBlock}>
        <Input
          label="Movie Name"
          placeholder="Movie"
          value={movie.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          error={errors.name}
        />
        <Input
          label="Time Span"
          placeholder="1 hour"
          value={movie.timeSpan}
          onChange={(e) => handleInputChange('timeSpan', e.target.value)}
          error={errors.timeSpan}
        />
        <Input
          label="Rating"
          placeholder="7"
          value={movie.rating}
          onChange={(e) => handleInputChange('rating', e.target.value)}
          error={errors.rating}
          type="number"
        />
      </div>
      <div style={styles.buttonsBlock}>
        <Button title="Add Movie" onClick={handleAddMovie} />
        <Button title="Delete Movie" onClick={handleDeleteMovies} />
      </div>
    </div>
  );
}

export default Sidebar;