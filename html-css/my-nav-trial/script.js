var navUl = document.querySelector('.menu-wrapper');
var burger = document.querySelector('#burger');

burger.addEventListener('click', function(event){
    navUl.classList.toggle('toggle-bar');
})