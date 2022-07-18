const btn = document.querySelector('#hamburguer-btn');
const closeBtn = document.querySelector('.close-btn');
const mobilenavlinks = document.querySelectorAll('.m-navlink');

btn.addEventListener('click', function () {
  document.getElementById('mobile-menu').style.visibility = 'visible';
});

closeBtn.addEventListener('click', function () {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
});

mobilenavlinks.forEach((el) => {
  el.addEventListener('click', function () {
    document.getElementById('mobile-menu').style.visibility = 'hidden';
  });
});
