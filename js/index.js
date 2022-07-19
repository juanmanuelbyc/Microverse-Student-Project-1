const btn = document.querySelector('#hamburguer-btn');
const closeBtn = document.querySelector('.close-btn');
const mobilenavlinks = document.querySelectorAll('.m-navlink');
const sections = document.querySelectorAll('.section');

btn.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.visibility = 'visible';
  sections.forEach((sect) => {
    sect.style.filter = 'blur(4px)';
  });
});

closeBtn.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
  sections.forEach((sect) => {
    sect.style.filter = 'none';
  });
});

mobilenavlinks.forEach((el) => {
  el.addEventListener('click', () => {
    document.getElementById('mobile-menu').style.visibility = 'hidden';
    sections.forEach((sect) => {
      sect.style.filter = 'none';
    });
  });
});
