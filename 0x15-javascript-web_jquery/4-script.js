/* eslint semi: ["error", "always"] */
/* global $ */

$('div#toggle_header').on('click', () => {
  $('header').toggleClass('green red');
});
