import header from '../elements/header';
import home from "../pages/home";
import menu from '../pages/menu'

const firstLoad = function() {
    const content = document.querySelector('#content');

    content.appendChild(header());
    content.appendChild(menu());
}

export default firstLoad;