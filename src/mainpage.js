function createHeader() {
    const hearder = document.createElement('header');
    hearder.appendChild(createNav());
    return hearder;
}

function createNav() {
    const nav = document.createElement('nav');
    const name = document.createElement('h2');
    name.textContent = "Prayer Position";

    const ul = document.createElement('ul');

    const homeTab = document.createElement('li');
    homeTab.classList.add('nav-itm');
    homeTab.textContent = "Home";

    const menuTab = document.createElement('li');
    menuTab.classList.add('nav-itm');
    menuTab.textContent = "menu";

    const contactTab = document.createElement('li');
    contactTab.classList.add('nav-itm');
    contactTab.textContent = "Contact";

    
    ul.appendChild(homeTab);
    ul.appendChild(menuTab);
    ul.appendChild(contactTab);

    nav.appendChild(name);
    nav.appendChild(ul);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    copyright.textContent = "Copyright © 2021 Matthew Smart";

    footer.appendChild(copyright);
    return footer;
}

function loadPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default loadPage;