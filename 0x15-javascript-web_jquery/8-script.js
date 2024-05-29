/* eslint semi: ["error", "always"] */
/* global $ */

const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
const moviesList = $('ul#list_movies');

$.get(url, (data, status) => {
  if (status === 'success') {
    data.results.forEach(movie => {
      moviesList.append(`<li>${movie.title}</li>`);
    });
  }
});
