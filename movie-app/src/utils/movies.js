export const compareMovies = (a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const convertToHours = (timeSpan) => {
  const [time, unit] = timeSpan.split(" ");

  if (unit === "hour" || unit === "hours") {
    const roundedHours = Math.round(time * 10) / 10;
    return `${roundedHours} ${roundedHours === 1 ? 'hour' : 'hours'}`;
  }

  if (unit === "minute" || unit === "minutes") {
    const roundedHours = Math.round(time / 60 * 10) / 10;
    return `${roundedHours} ${roundedHours === 1 ? 'hour' : 'hours'}`;
  }
};

