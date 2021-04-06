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
    "h1": "DOM Is Awesome",
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('nav > a')
navLinks[0].textContent = siteContent.nav["nav-item-1"]
navLinks[1].textContent = siteContent.nav["nav-item-2"]
navLinks[2].textContent = siteContent.nav["nav-item-3"]
navLinks[3].textContent = siteContent.nav["nav-item-4"]
navLinks[4].textContent = siteContent.nav["nav-item-5"]
navLinks[5].textContent = siteContent.nav["nav-item-6"]

const headerText = document.querySelector('.cta h1');
headerText.textContent = siteContent.cta["h1"];

const buttonText = document.querySelector('.cta button');
buttonText.textContent = siteContent.cta['button'];

const headerImg = document.querySelector('.cta img');
headerImg.setAttribute('src', siteContent.cta['img-src']);

const mainSectionTop = document.querySelector('.top-content');
const topSubs = mainSectionTop.querySelectorAll('h4');
const topText = mainSectionTop.querySelectorAll('p');
topSubs[0].textContent = siteContent['main-content']['features-h4'];
topSubs[1].textContent = siteContent['main-content']['about-h4'];
topText[0].textContent = siteContent['main-content']['about-content'];
topText[1].textContent = siteContent['main-content']['features-content'];

const centerImg = document.querySelector('#middle-img');
centerImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainSectionBot = document.querySelector('.bottom-content');
const botSubs = mainSectionBot.querySelectorAll('h4');
const botText = mainSectionBot.querySelectorAll('p');
botSubs[0].textContent = siteContent['main-content']['services-h4'];
botSubs[1].textContent = siteContent['main-content']['product-h4'];
botSubs[2].textContent = siteContent['main-content']['vision-h4'];
botText[0].textContent = siteContent['main-content']['services-content'];
botText[1].textContent = siteContent['main-content']['product-content'];
botText[2].textContent = siteContent['main-content']['vision-content'];

const contactSection = document.querySelector('.contact'); 
const contactSub = contactSection.querySelector('h4');
const contactText = contactSection.querySelectorAll('p');
contactSub.textContent = siteContent['contact']['contact-h4'];
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

const footerSection = document.querySelector('footer');
footerSection.textContent = siteContent['footer']['copyright'];














