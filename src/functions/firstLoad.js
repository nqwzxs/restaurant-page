import header from '../elements/header';
import home from "../pages/home";

const firstLoad = function() {
    const content = document.querySelector('#content');

    content.appendChild(header());
    content.appendChild(home());
}

export default firstLoad;