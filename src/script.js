import "./style.css";
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadAbout from './loadAbout';

console.log("Hello, Restaurant Page!");

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');

const arr=[homeButton, menuButton, aboutButton];

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    homeButton.classList.add('focused');
    homeButton.focus();
});
homeButton.addEventListener('click', () => {
    arr.forEach(button => button.classList.remove('focused'));
    homeButton.classList.add('focused');
    loadHome();
});
menuButton.addEventListener('click', () => {
    arr.forEach(button => button.classList.remove('focused'));
    menuButton.classList.add('focused');
    loadMenu();
});
aboutButton.addEventListener('click', () => {
    arr.forEach(button => button.classList.remove('focused'));
    aboutButton.classList.add('focused');
    loadAbout();
});
