import menuData from '../assets/menuList.json';

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

export default menu;