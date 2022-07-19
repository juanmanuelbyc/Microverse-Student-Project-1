const projects = {
  project1: {
    pname: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    tech1: 'HTML',
    tech2: 'css',
    tech3: 'JavaScript',
    smallimagelink: 'url("../images/p1image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")'
  },
  project2: {
    pname: 'Multi-post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    role: 'Full Stack Dev',
    year: '2015',
    client: 'Facebook',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p2image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")'
  },
  project3: {
    pname: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    role: 'Full Stack Dev',
    client: 'Facebook',
    year: '2015',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p3image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")'
  },
  project4: {
    pname: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p4image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")'
  }
};

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

