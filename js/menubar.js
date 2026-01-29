$(function () {

  $('.menu-toggle').click(function () {
    $('nav.mobile').slideToggle(250);
    $(this).find('i').toggleClass('fa-bars fa-xmark');
  });

  // fecha menu ao clicar em um link
  $('nav.mobile a').click(function () {
    $('nav.mobile').slideUp(250);
  });

});