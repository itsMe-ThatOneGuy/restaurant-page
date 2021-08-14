function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-container');
    
    contact.appendChild(contactHero());
    contact.appendChild(address());
    contact.appendChild(businessHours());
    contact.appendChild(mapIframe());

    return contact;
}

function contactHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroL = document.createElement('h1');
    heroL.textContent = "Contact Us"

    hero.appendChild(heroL);

    return hero;
}

function address() {
    const addressCont = document.createElement('div');
    addressCont.classList.add('address-container');

    const addressIcon = document.createElement('i');
    addressIcon.classList.add('fas', 'fa-map-marker-alt')

    const address = document.createElement('p');
    address.setAttribute('style', 'white-space: pre;');
    address.textContent = "924 Gilman St. \r\n Berkeley, CA 94710";
    address.classList.add('address');

    addressCont.appendChild(addressIcon);
    addressCont.appendChild(address);
    
    return addressCont;
}

function businessHours() {
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const hoursIcon = document.createElement('i');
    hoursIcon.classList.add('fas', 'fa-clock');

    const dayAndTime = document.createElement('p');
    dayAndTime.setAttribute('style', 'white-space: pre;');
    dayAndTime.textContent = "M-F 11:00am–2p, 4:30p–12am \r\n Sat 11:30am–2:30p, 4:30p–12am \r\n Su 11:30am–9p "
    

    hoursContainer.appendChild(hoursIcon);
    hoursContainer.appendChild(dayAndTime);

    return hoursContainer;
}


//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6298.424561310563!2d-122.3032390051288!3d37.87871799322308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857ec9cb6639f1%3A0x49ec1cc7e7dc57fc!2sAlternative%20Music%20Foundation!5e0!3m2!1sen!2sus!4v1628904224306!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
function mapIframe() {
    const iframeCont = document.createElement('div');


    const iFrame = document.createElement('iframe');
    iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6298.424561310563!2d-122.3032390051288!3d37.87871799322308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857ec9cb6639f1%3A0x49ec1cc7e7dc57fc!2sAlternative%20Music%20Foundation!5e0!3m2!1sen!2sus!4v1628904224306!5m2!1sen!2sus";

    iframeCont.appendChild(iFrame);

    return iframeCont;
}


function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}





export default loadContact