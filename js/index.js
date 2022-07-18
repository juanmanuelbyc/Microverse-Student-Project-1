let btn = document.querySelector('#hamburguer-btn');
let closeBtn = document.querySelector('.close-btn');
let mobilenavlinks = document.querySelectorAll('.m-navlink');
let al = document.querySelectorAll('*:not(#hamburguer-btn,.m-navlink)');


btn.addEventListener('click', function(event) {
    document.getElementById('mobile-menu').style.visibility = 'visible';
    
});

closeBtn.addEventListener('click', function(event) {
    document.getElementById('mobile-menu').style.visibility = 'hidden';

});

mobilenavlinks.forEach((el)=>{
    el.addEventListener('click', function(event) {
        document.getElementById('mobile-menu').style.visibility = 'hidden';
    });
});
