import "./style.css";
import krustyKrab from "./krustyKrab.png";

const mainDiv = document.querySelector('#content');

function loadHomePage() {
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

loadHomePage();