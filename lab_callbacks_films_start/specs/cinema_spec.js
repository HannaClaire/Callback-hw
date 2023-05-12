const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function() {
    const expected = films.map(film => film.title);
    const actual = cinema.getFilmTitles();
    assert.deepStrictEqual(actual, expected)


  });



  it('should be able to find a film by title', function () { ;
    // cinema.addFilmsTitles(moonlight)
    // cinema.addFilmsTitles(bladeRunner)
    // cinema.addFilmsTitles(dunkirk)
    // cinema.addFilmsTitles(blackPanther)
    // cinema.addFilmsTitles(trainspotting)
    const expected = [moonlight]
    const actual = cinema.findFilmTitles("Moonlight")
    assert.deepStrictEqual(actual, expected)
  
  it('should be able to filter films by genre');
  it('should be able to calculate total running time of all films');
  it('should be able to confirm *at least one* film is from a specified year - true case - 1/2' );
  it('should be able to confirm *none of* the films are from a specified year - false case - 2/2');
  it('should be able to confirm whether *all* films are *at least* a specified length (true / false)');


});



  //   cinema.addFilmsTitles(moonlight)
  //   cinema.addFilmsTitles(bladeRunner)
  //   cinema.addFilmsTitles(dunkirk)
  //   cinema.addFilmsTitles(blackpanther)
  //   cinema.addFilmsTitles(trainspotting)
  //   const expected = [moonlight, bladerunner, dunkirk, blackpanther, trainspotting]
  //   const actual = cinema.filmTitles("Moonlight", "Bladerunner", "Dunkirk", "Black Panther", "T2 Trainspotting")
  //   assert.deepStrictEqual(actual, expected)
  // })

});