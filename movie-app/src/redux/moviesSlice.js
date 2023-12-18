import { createSlice } from "@reduxjs/toolkit";
import { compareMovies } from "../utils/movies";

const initialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload].sort(compareMovies);
    },
    deleteCheckedMovies: (state) => {
      state.movies = state.movies.filter(movie => !movie.isDelete).sort(compareMovies);
    },
    checkMovie: (state, action) => {
      const { name } = action.payload;
      state.movies = state.movies.map(movie =>
        movie.name === name ? { ...movie, isDelete: !movie.isDelete } : movie
      );
    },
  },
});

export const { addMovie, deleteCheckedMovies, checkMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
