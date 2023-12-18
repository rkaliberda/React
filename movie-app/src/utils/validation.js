import { convertToHours } from "./movies";

const isValidMovieLength = (string) => {
  const convertedString = convertToHours(string);
  if (!convertedString) return;
  const [hours,] = convertedString.split(" ")
  return hours <= 3 ? true : false
}

const isValidTimeSpanString = (string) => {
  const regex = /^([1-9]\d*(?:\.\d+)?)\s(hours?|minutes?)$/i;
  return regex.test(string.trim());
};

export const validationErrors = (movie) => {
  const errors = {}

  if (!movie.name) {
    errors.name = "Name is required";
  }
  if (!isValidMovieLength(movie.timeSpan)) {
    errors.timeSpan = "Should be no more than 3 hours";
  }
  if (!isValidTimeSpanString(movie.timeSpan)) {
    errors.timeSpan = "Invalid format. Please provide a valid format (1.5 hours or 90 minutes)";
  }
  if (!movie.timeSpan) {
    errors.timeSpan = "Time Span is required";
  }
  if (movie.rating < 1 || movie.rating > 10) {
    errors.rating = "Should only allow numbers 1-10"
  }
  if (!movie.rating) {
    errors.rating = "Rating is required";
  }
  return errors
}



