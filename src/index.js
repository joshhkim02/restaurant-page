import "./style.css";
import krustyKrab from "./krustykrab.png";
import krustyCrew from "./krustycrew.jpg";
import krabbyPatty from "./krabbypatty.png";

const mainDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.home_btn');
const menuBtn = document.querySelector('.menu_btn');
const contactBtn = document.querySelector('.contact_btn');


function loadHomePage() {
    removePage();

    const headline = document.createElement('div');
    headline.setAttribute('id', 'headline');
    headline.textContent = 'The Krusty Krab';
    mainDiv.appendChild(headline);

    const image = document.createElement('img');
    image.setAttribute('id', 'img-content');
    image.src = krustyKrab;
    mainDiv.appendChild(image);

    const subline = document.createElement('div');
    subline.setAttribute('id', 'subline');
    subline.textContent = 'Welcome to The Krusty Krab, home of the famous Krabby Patty!';
    mainDiv.appendChild(subline);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');

    const days = [
        "Monday: 9:00 AM - 9:00 PM",
        "Tuesday: 9:00 AM - 9:00 PM",
        "Wednesday: 9:00 AM - 9:00 PM",
        "Thursday: 9:00 AM - 9:00 PM",
        "Friday: 9:00 AM - 9:00 PM",
        "Saturday: 9:00 AM - 9:00 PM",
        "Sunday: 9:00 AM - 9:00 PM"
    ]

    days.forEach(day => {
        const p = document.createElement('p');
        p.textContent = day;
        hours.appendChild(p);
    });

    mainDiv.appendChild(hours);
} 

function loadMenuPage() {
    removePage();
    
    const headline = document.createElement('div');
    headline.setAttribute('id', 'headline');
    headline.textContent = 'Menu';
    mainDiv.appendChild(headline);

    const image = document.createElement('img');
    image.setAttribute('id', 'img-content');
    image.src = krabbyPatty;
    mainDiv.appendChild(image);

    const subline = document.createElement('div');
    subline.setAttribute('id', 'subline');
    subline.textContent = 'We shall never deny a guest even the most ridiculous request!';
    mainDiv.appendChild(subline);

    const menu = document.createElement('div');
    menu.setAttribute('id', 'hours');

    const fullMenu = [
        "Krabby Patty: $10.50",
        "Double Krabby Patty: $13.50",
        "Triple Krabby Patty: $16.50",
        "Flying Dutchman: $20.00",
        "Seaweed Fries: $8.50",
        "Krabby Shake: $6.00",
        "Kelp Soda: $4.00"
    ]

    fullMenu.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        menu.appendChild(p);
    });

    mainDiv.appendChild(menu);
} 

function loadContactPage() {
    removePage();
    
    const headline = document.createElement('div');
    headline.setAttribute('id', 'headline');
    headline.textContent = 'Contact Us!';
    mainDiv.appendChild(headline);

    const image = document.createElement('img');
    image.setAttribute('id', 'img-content');
    image.src = krustyCrew;
    mainDiv.appendChild(image);

    const subline = document.createElement('div');
    subline.setAttribute('id', 'subline');
    subline.textContent = 'Meet the staff!';
    mainDiv.appendChild(subline);

    const contact = document.createElement('div');
    contact.setAttribute('id', 'hours');

    const contactInfo = [
        "Mr. Krabs: 444-444-4444",
        "Squidward Tentacles: 555-555-5555",
        "Spongebob Squarepants: 111-111-1111",
        "Human Resources: 222-222-2222",
        "To-Go Orders: 123-456-7890"
    ]

    contactInfo.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        contact.appendChild(p);
    });

    mainDiv.appendChild(contact);
} 

function removePage() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

loadHomePage();

homeBtn.addEventListener('click', loadHomePage);
menuBtn.addEventListener('click', loadMenuPage);
contactBtn.addEventListener('click', loadContactPage);