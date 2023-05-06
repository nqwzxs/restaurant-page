import menuData from '../assets/data/menu-data.json';

import californiaRollImage from '../assets/images/california-roll.jpg';
import spicyTunaRollImage from '../assets/images/spicy-tuna-roll.jpg';
import dragonRollImage from '../assets/images/dragon-roll.jpg';
import margheritaImage from '../assets/images/margherita.jpg';
import pepperoniImage from '../assets/images/pepperoni.jpg';
import onionRingsImage from '../assets/images/onion-rings.jpg';

const menu = function () {
    const main = document.createElement('main');
    main.classList.add('menu');
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);

    const h3 = document.createElement('h3');
    h3.textContent = 'Menu';
    wrapper.appendChild(h3);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    
    menuData.forEach((item) => {
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = images[item.name];
        div.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = item.name;
        div.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = item.description;
        div.appendChild(p);

        menuGrid.appendChild(div);
    });

    wrapper.appendChild(menuGrid);

    return main;
}

const images = {
    'California Roll': californiaRollImage,
    'Spicy Tuna Roll': spicyTunaRollImage,
    'Dragon Roll': dragonRollImage,
    'Margherita': margheritaImage,
    'Pepperoni': pepperoniImage,
    'Onion Rings': onionRingsImage,
}

export default menu;