console.log(movies);

// first task

const sorted = movies.sort(function (a, b) {
  return b.year - a.year;
});

const sub = sorted.slice(0, 16);

console.log(sub);

const cardTitle = document.querySelectorAll(".card-title");

for (let i = 0; i < sub.length; i++) {
  cardTitle[i].textContent = sub[i].title;
}

const cardText = document.querySelectorAll(".card-text");

for (let i = 0; i < sub.length; i++) {
  cardText[i].textContent = sub[i].extract;
}

const cardImage = document.querySelectorAll(".card-img-top");

for (let i = 0; i < sub.length; i++) {
  cardImage[i].setAttribute("src", sub[i].thumbnail);
  cardImage[i].setAttribute("alt", sub[i].title);
}

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
