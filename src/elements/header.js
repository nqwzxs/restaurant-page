const header = function () {
    const header = document.createElement('header');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    header.appendChild(wrapper);

    const logo = document.createElement('div');
    logo.textContent = 'Umamiya Cafe';
    logo.classList.add('logo');
    wrapper.appendChild(logo);

    const nav = document.createElement('nav');
    wrapper.appendChild(nav);

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const links = ['Home', 'Menu', 'Contact'];
    links.forEach((el) => {
        const li = document.createElement('li');
        li.classList.add(`${el.toLowerCase()}-button`);
        li.textContent = el;
        ul.appendChild(li);
    });

    return header;
}

export default header;