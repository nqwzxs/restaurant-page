const contact = function () {
    const main = document.createElement('main');
    main.classList.add('contact');
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactInfoHeading = document.createElement('h3');
    contactInfoHeading.textContent = 'Contact Info';
    contactInfo.appendChild(contactInfoHeading);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone Number: +1 234 567 8901';
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.textContent = 'Email: contact@umamiya.moe';
    contactInfo.appendChild(email);

    const mapLocationText = document.createElement('p');
    mapLocationText.textContent = 'Kauffmannweg 7, 6003 Luzern, Switzerland';
    contactInfo.appendChild(mapLocationText);

    wrapper.appendChild(contactInfo);

    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media');

    const socialMediaHeading = document.createElement('h3');
    socialMediaHeading.textContent = 'Social Media';
    socialMedia.appendChild(socialMediaHeading);

    const twitter = document.createElement('p');
    twitter.textContent = 'Twitter: @umamiya_cafe';
    socialMedia.appendChild(twitter);

    const instagram = document.createElement('p');
    instagram.textContent = 'Instagram: @umamiya_cafe';
    socialMedia.appendChild(instagram);

    const youtube = document.createElement('p');
    youtube.textContent = 'YouTube: Umamiya Cafe Channel';
    socialMedia.appendChild(youtube);

    wrapper.appendChild(socialMedia);

    return main;
}

export default contact;