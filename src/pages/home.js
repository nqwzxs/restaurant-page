const home = function() {
    const main = document.createElement('main');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);

    const h3 = document.createElement('h3');
    h3.textContent = 'Welcome to Umamiya Cafe webpage!';
    wrapper.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = "Umamiya Cafe is a small but cozy sushi restaurant that specializes in delivering a memorable umami taste experience to \
                its diners. With a minimalist yet inviting decor, Umamiya Cafe offers a variety of traditional sushi dishes, each \
                expertly crafted with fresh ingredients and careful attention to detail. Whether you're a sushi aficionado or a newcomer \
                to the cuisine, Umamiya Cafe promises a unique and satisfying dining experience that will leave you craving more.";
    wrapper.appendChild(p);

    return main;
}

export default home;