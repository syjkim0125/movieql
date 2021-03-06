let movies = [
  {
    id: 0,
    name: "Tora",
    score: 9
  },
  {
    id: 1,
    name: "Todd",
    score: 7
  },
  {
    id: 2,
    name: "Joshua",
    score: 10
  },
  {
    id: 3,
    name: "Kathy",
    score: 6
  },
  {
    id: 4,
    name: "Jisu",
    score: 10
  }
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id != id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}
