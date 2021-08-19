function createMenu() {
    const menu = document.createElement('div');

    menu.appendChild(
        menuItem(
            "Vegan Lasagna",
            "Vegan meat stuff, Vegan Cheese stuff, and some kind of Vegan sauce"
        )
    );

    return menu;
}

function menuItem (name, description) {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');

    const menuItemName = document.createElement('h2')
    menuItemName.textContent = name;
    menuItemName.classList.add('menu-item-name');

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = description;
    menuItemDescription.classList.add('menu-item-des');

    const menuItemImg = document.createElement('img');
    menuItemImg.src = `img/${name.toLowerCase()}.png`;
    menuItemImg.alt = `${name}`;
    menuItemImg.classList.add('menu-item-img');

    menuItemContainer.appendChild(menuItemImg);
    menuItemContainer.appendChild(menuItemName);
    menuItemContainer.appendChild(menuItemDescription);

    return menuItemContainer;
}



function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu 