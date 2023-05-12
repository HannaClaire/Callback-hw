class Cinema {
  constructor(films) {
    this.films = films;
  }

  getFilmTitles() {
    return this.films.map(film => film.title);
  }
}



module.exports = Cinema;



Cinema.prototype.addFilmsTitles = function (film) {
    this.films.push(film); 
}

Cinema.prototype.findFilmTitles = function (title) {
  const foundFilms = [];

  for (const film of this.films) {
    if (film.title === title) {
      foundFilms.push(film);
    }
  }

  return foundFilms
}


// getFilmTitles() {

//   return this.films.map(film => film.title);

// }