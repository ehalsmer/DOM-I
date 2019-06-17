const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\nIs\nAwesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const rightImg = document.querySelector('#cta-img');
rightImg.src = '/img/header-img.png'

const middleImg = document.querySelector('#middle-img');
middleImg.src = '/img/mid-page-accent.jpg';

// Navigation

const navItems = document.querySelectorAll('nav>a');

// navItems.appendChild(newNavItem);


const navArr = Array.from(navItems);

navArr[0].textContent = siteContent["nav"]["nav-item-1"];
navArr[1].textContent = siteContent["nav"]["nav-item-2"];
navArr[2].textContent = siteContent["nav"]["nav-item-3"];
navArr[3].textContent = siteContent["nav"]["nav-item-4"];
navArr[4].textContent = siteContent["nav"]["nav-item-5"];
navArr[5].textContent = siteContent["nav"]["nav-item-6"];

// Set nav links color to green
navArr.forEach(a => a.style.color = 'green');
navArr.forEach(a => a.style.fontSize = '15px');


// New nav items, appended and prepended
const nav = document.querySelector('nav');

const newNavItem = document.createElement('a');
newNavItem.textContent = 'Documentation';
newNavItem.style.color = 'green';
newNavItem.style.fontSize = '15px';

nav.appendChild(newNavItem);

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Download';
newNavItem2.style.color = 'green';
newNavItem2.style.fontSize = '15px';
nav.prepend(newNavItem2);

// document.querySelector('nav>a').style.fontSize = '10px';

// document.querySelector('nav>a').style.color = 'green';

// Top Content

document.querySelector('h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text').style.whiteSpace = 'pre';

// Button
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;
button.addEventListener('click', (event) => {alert("This button doesn't do anything! (except this)")})

// Main Content
const textTitles = document.querySelectorAll('.text-content h4');
const textArr = Array.from(textTitles);

const textBlocks = document.querySelectorAll('.text-content p');
const textArrPar = Array.from(textBlocks);

textArr[0].textContent = siteContent["main-content"]["features-h4"];
textArr[1].textContent = siteContent["main-content"]["about-h4"];
textArr[2].textContent = siteContent["main-content"]["services-h4"];
textArr[3].textContent = siteContent["main-content"]["product-h4"];
textArr[4].textContent = siteContent["main-content"]["vision-h4"];

textArrPar[0].textContent = siteContent["main-content"]["features-content"];
textArrPar[1].textContent = siteContent["main-content"]["about-content"];
textArrPar[2].textContent = siteContent["main-content"]["services-content"];
textArrPar[3].textContent = siteContent["main-content"]["product-content"];
textArrPar[4].textContent = siteContent["main-content"]["vision-content"];

const paragraphs = document.querySelector('.main-content p');
paragraphs.addEventListener('mouseenter', (event)=>{
  paragraphs.style.color = 'green';
  setTimeout(function(){
    paragraphs.style.color = 'black';
  }, 500)
}, false);

// Contact
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];

const contactPar = document.querySelectorAll('.contact p');
contactArr = Array.from(contactPar);

contactArr[0].textContent = siteContent["contact"]["address"];
contactArr[1].textContent = siteContent["contact"]["phone"];
contactArr[2].textContent = siteContent["contact"]["email"];

document.querySelector('.contact').style.fontSize = '16px';
document.querySelector('.contact').style.maxWidth = '200px';


// Footer
document.querySelector('footer').textContent = siteContent.footer.copyright;
document.querySelector('footer').style.fontSize = '0.75rem';
