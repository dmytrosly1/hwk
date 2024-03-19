console.log(movies);

// first task

const sorted = movies.sort(function (a, b) {
  return b.year - a.year;
});

const sub = sorted.slice(0, 16);

console.log(sub);

//

// second task

const filterMovies = movies.filter(function (movie) {
  return movie.genres.includes("Action");
});

console.log(filterMovies);

//

// third task

function collectGenres(movies) {
  const genres = [];

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  return genres;
}

const genres = collectGenres(movies);
console.log(genres);

//
