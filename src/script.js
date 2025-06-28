import "./style.css";
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadAbout from './loadAbout';

console.log("Hello, Restaurant Page!");

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    homeButton.focus();
});
homeButton.addEventListener('click', () => {
    loadHome();
});
menuButton.addEventListener('click', () => {
    loadMenu();
});
aboutButton.addEventListener('click', () => {
    loadAbout();
});
