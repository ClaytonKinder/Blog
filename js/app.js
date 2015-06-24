var header = $('header');
var headerMenuIcon = $('#header-menu-icon-block button i');
var headerMenuBlock = $('#header-menu-block');
var headerChevron = $('#header-chevron');

console.log($(window).height());

header.css('height', $(window).height());

$(headerChevron).on('click', function() {
  $('html, body').animate({
      scrollTop: $('main').offset().top
  }, 500);
});

$('#navLinkHome').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('header').offset().top
  }, 500);
});

$('#navLinkArticles').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('main').offset().top
  }, 500);
});
