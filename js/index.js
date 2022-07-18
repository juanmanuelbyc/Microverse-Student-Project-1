let btn = document.querySelector('#hamburguer-btn');
let closeBtn = document.querySelector('.close-btn');
let mobilenavlinks = document.querySelectorAll('.m-navlink');

btn.addEventListener('click', function(event) {
    document.getElementById('mobile-menu').style.visibility = 'visible';
});

closeBtn.addEventListener('click', function(event) {
    document.getElementById('mobile-menu').style.visibility = 'hidden';
});

mobilenavlinks.addEventListener('click', function(event) {
    document.getElementById('mobile-menu').style.visibility = 'hidden';
});