var navList = document.querySelector('.page-header__navigation');
var navToggle = document.querySelector('.page-header__nav-toggle');

navList.classList.remove('page-header__navigation--nojs');

navToggle.addEventListener('click', function() {
  navList.classList.toggle('page-header__navigation--opened');
  navList.classList.toggle('page-header__navigation--closed');
});