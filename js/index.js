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
    "middle-img-src": "img/mid-page.jpg",
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
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 


const navLinks = document.querySelectorAll("nav a");

const navItems = siteContent.nav;  
let i=0;
for (const item in navItems){  
  if(i<= navLinks.length-1){
  const tempItem = navItems[item]; 
  navLinks[i].innerHTML = tempItem;
  i++;
  }
}
const navImage = document.querySelector("header img");
navImage.setAttribute("src", siteContent.nav["img-src"]);

const ctaText = document.getElementsByClassName('cta-text')[0];
ctaText.querySelector('h1').textContent = siteContent.cta['h1'];
ctaText.querySelector('button').textContent = siteContent.cta['button'];
document.getElementById("cta-img").setAttribute("src", siteContent.cta["img-src"]);

const topContent = document.getElementsByClassName('top-content');

const topTextContent = document.getElementsByClassName('text-content')[0];
topTextContent.querySelector('h4').textContent = siteContent["main-content"]['features-h4'];
topTextContent.querySelector('p').textContent = siteContent["main-content"]['features-content'];

const topTextContent1 = document.getElementsByClassName('text-content')[1];
topTextContent1.querySelector('h4').textContent = siteContent["main-content"]['about-h4'];
topTextContent1.querySelector('p').textContent = siteContent["main-content"]['about-content'];

document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//const bottomContent = document.getElementsByClassName('bottom-content');

const bottomTextContent1 = document.getElementsByClassName('text-content')[2];
bottomTextContent1.querySelector('h4').textContent = siteContent["main-content"]['services-h4'];
bottomTextContent1.querySelector('p').textContent = siteContent["main-content"]['services-content'];

const bottomTextContent2 = document.getElementsByClassName('text-content')[3];
bottomTextContent2.querySelector('h4').textContent = siteContent["main-content"]['product-h4'];
bottomTextContent2.querySelector('p').textContent = siteContent["main-content"]['product-content'];


const bottomTextContent3 = document.getElementsByClassName('text-content')[4];
bottomTextContent3.querySelector('h4').textContent = siteContent["main-content"]['vision-h4'];
bottomTextContent3.querySelector('p').textContent = siteContent["main-content"]['vision-content'];


const contactContent = document.querySelector('.contact');
contactContent.querySelector('h4').textContent = siteContent.contact['contact-h4'];

const contactP = contactContent.querySelectorAll("p");
contactP[0].textContent = siteContent.contact['address'];
contactP[1].textContent = siteContent.contact['phone'];
contactP[2].textContent = siteContent.contact['email'];

const footerContent = document.getElementsByTagName('footer')[0];
footerContent.querySelector('p').textContent = siteContent.footer['copyright'];


const newNav = document.querySelector(".container header nav");
  const extraNavItem1 = document.createElement("a");
  extraNavItem1.textContent = "I'm Extra!";
  newNav.appendChild(extraNavItem1);

const extraNavItem2 = document.createElement("a");
  extraNavItem2.textContent = "I'm Also Extra :)";
  newNav.appendChild(extraNavItem2);

const navLinks1 = document.querySelectorAll("header nav a");

for (let i = 0; i < navLinks1.length; i++) {
 navLinks1[i].style.color = 'green'; 
}

ctaText.querySelector('button').addEventListener('click', () => {
ctaText.querySelector('h1').textContent = "I'm Awesome";
ctaText.querySelector('button').textContent = "Surprise !";
document.getElementById("cta-img").setAttribute("src", "img/pic.png");
document.getElementById("cta-img").style.height  = "379px"
document.getElementById("cta-img").style.width  = "379px"

});