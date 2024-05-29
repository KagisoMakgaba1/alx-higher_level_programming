/* eslint semi: ["error", "always"] */
/* global $ */

$('div#red_header').on('click', () => {
  $('header').addClass('red');
});
