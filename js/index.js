const nameElem = document.getElementById('user-name');
const emailElem = document.getElementById('user-email');
const messageElem = document.querySelector('#user-message');

function setInfo() {
  const currentName = localStorage.getItem('formInfo').split(',')[0];
  nameElem.value = currentName;
  const currentEmail = localStorage.getItem('formInfo').split(',')[1];
  emailElem.value = currentEmail;
  const CurrentMessage = localStorage.getItem('formInfo').split(',')[2];
  messageElem.value = CurrentMessage;
}

function populateStorage() {
  const info = {
    name: nameElem.value,
    email: emailElem.value,
    message: messageElem.value,
  };
  localStorage.setItem('formInfo', info.name, ',', info.email, ',', info.message);
  setInfo();
}

if (!localStorage.getItem('formInfo')) {
  populateStorage();
} else {
  setInfo();
}

nameElem.onchange = populateStorage;
emailElem.onchange = populateStorage;
messageElem.onchange = populateStorage;

const projects = {
  project1: {
    pname: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    tech1: 'HTML',
    tech2: 'css',
    tech3: 'JavaScript',
    smallimagelink: 'url("../images/p1image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")',
    livelink: 'url("www.google.com")',
    srclink: 'url("www.google.com")',
  },
  project2: {
    pname: 'Multi-post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    role: 'Full Stack Dev',
    year: '2015',
    client: 'Facebook',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p2image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")',
    livelink: 'url("www.google.com")',
    srclink: 'url("www.google.com")',
  },
  project3: {
    pname: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    role: 'Full Stack Dev',
    client: 'Facebook',
    year: '2015',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p3image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")',
    livelink: 'url("www.google.com")',
    srclink: 'url("www.google.com")',
  },
  project4: {
    pname: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    tech1: 'HTML',
    tech2: 'Ruby on rails',
    tech3: 'css',
    smallimagelink: 'url("../images/p4image.png")',
    bigimagelink: 'url("../images/p1imagebig.jpg")',
    livelink: 'url("www.google.com")',
    srclink: 'url("www.google.com")',
  },
};

for (let i = 0; i < 4; i += 1) {
  const numbertotext = (i + 1).toString();
  const div = document.createElement('div');
  div.id = `project${numbertotext}`;
  div.className = 'project';
  div.innerHTML = `<div class="pimage"></div>
    <div class="projectdetails">
      <div class="p-title">
        <h2 class="titletext">xxxxx</h2>
      </div>
      <ul class="details-list">
        <li class="client">xxxx</li>
        <li class="spacedot"></li>
        <li class="role">xxxxx</li>
        <li class="spacedot"></li>
        <li class="year">xxxx</li>
      </ul>
      <div class="p-description">
        <p class="pdescriptiontext">xxxx</p>
      </div>
      <div class="languages">
        <ul class="languages-list">
          <li class="lang tech1">xxx</li>
          <li class="lang tech2">xxx</li>
          <li class="lang tech3">xxx</li>
        </ul>
      </div>
      <div class="project-access btn">See project</div>
    </div>`;
  document.querySelector('.projects').appendChild(div);
}

const btn = document.querySelector('#hamburguer-btn');
const btnSeePrjct = document.querySelectorAll('.project-access');
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

const projectz = document.querySelectorAll('.project');

for (let i = 0; i < projectz.length; i += 1) {
  const project = projectz[i];
  const numbertotext = ((i + 1).toString());
  const pnumber = `project${numbertotext}`;
  project.querySelector('.titletext').innerText = projects[pnumber].pname;
  project.querySelector('.pdescriptiontext').innerText = projects[pnumber].description;
  project.querySelector('.client').innerText = projects[pnumber].client;
  project.querySelector('.role').innerText = projects[pnumber].role;
  project.querySelector('.year').innerText = projects[pnumber].year;
  project.querySelector('.tech1').innerText = projects[pnumber].tech1;
  project.querySelector('.tech2').innerText = projects[pnumber].tech2;
  project.querySelector('.tech3').innerText = projects[pnumber].tech3;
  project.querySelector('.pimage').style.backgroundImage = projects[pnumber].smallimagelink;
}

function createPopUp(el) {
  const project = el.closest('.project');
  const div = document.createElement('div');
  div.className = 'popUp';
  div.innerHTML = `<div class="cardcontainer">
     <div class="p-title">
       <h2 class="titletext">xxxxx</h2>
       <a class="card-close-btn" href = "">x</a>
     </div>
     <ul class="details-list">
       <li class="client">xxxx</li>
       <li class="spacedot"></li>
       <li class="role">xxxxx</li>
       <li class="spacedot"></li>
       <li class="year">xxxx</li>
     </ul>
     <div class="cimage"></div>
     <div class="detailsproject">
       <div class="p-description">
         <p class="pdescriptiontext">xxxx</p>
       </div>
       <div class="langsAndBtns">
         <div class="languages">
           <ul class="languages-list">
             <li class="lang tech1">xxx</li>
             <li class="lang tech2">xxx</li>
             <li class="lang tech3">xxx</li>
           </ul>
         </div>
         <div class="btns">
           <div class="live-btn btn">
             <h3>See Live</h3>
             <div class="live-icon"></div>
           </div>
           <div class="btn src-btn">
             <h3>See Source</h3>
             <div class="src-icon"></div>
           </div>
         </div>
       </div>
     </div>
   </div>`;
  div.style.position = 'fixed';

  const myname = project.id;

  div.querySelector('.titletext').innerText = projects[myname].pname;
  div.querySelector('.pdescriptiontext').innerText = projects[myname].longdescription;
  div.querySelector('.client').innerText = projects[myname].client;
  div.querySelector('.role').innerText = projects[myname].role;
  div.querySelector('.year').innerText = projects[myname].year;
  div.querySelector('.tech1').innerText = projects[myname].tech1;
  div.querySelector('.tech2').innerText = projects[myname].tech2;
  div.querySelector('.tech3').innerText = projects[myname].tech3;
  div.querySelector('.cimage').style.backgroundImage = projects[myname].smallimagelink;
  div.querySelector('.live-icon').style.backgroundImage = 'url("../images/liveicon.png")';
  div.querySelector('.src-icon').style.backgroundImage = 'url("../images/catvector.png")';
  document.body.prepend(div);
}

btnSeePrjct.forEach((el) => {
  el.addEventListener('click', () => {
    createPopUp(el);
  });
});

function showMsg(input, msg, type) {
  document.querySelector('small').innerText = msg;
  return type;
}

function showError(input, message) {
  return showMsg(input, message, false);
}

function showSuccess(input) {
  return showMsg(input, '', true);
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  showSuccess(input);
  return true;
}

const form = document.querySelector('#contactme-form');
const EMAIL_INVALID = 'Please email should be in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements['user-email'], EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});
