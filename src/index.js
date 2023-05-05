import './styles/main.css';

import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';

import firstLoad from './functions/firstLoad';
import loadPage from './functions/loadPage';

firstLoad();

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', () => {
    loadPage(home);
});

menuButton.addEventListener('click', () => {
    loadPage(menu);
});

contactButton.addEventListener('click', () => {
    loadPage(contact);
});
