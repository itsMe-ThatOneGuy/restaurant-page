function createMenu() {
    const menu = document.createElement('div');
   

    const testText = document.createElement('h1');
    testText.textContent = "Menu Stuff Here";

    menu.appendChild(testText);

    return menu;
}





function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu 