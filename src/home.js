function createHome() {
    const home = document.createElement('div');
    home.classList.add('home-container');

    home.appendChild(createHero());
    home.appendChild(createHeroImg());
    return home;
}

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroL = document.createElement('h1');
    heroL.textContent = 'Pushed to our Knees so let us pray';

    const heroP = document.createElement('p');
    heroP.textContent = 'The best straight edge Punk vegan resturant in all of CA';

    hero.appendChild(heroL);
    hero.appendChild(heroP);

    return hero;
}

function createHeroImg() {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const punkImg = document.createElement('img');
    punkImg.src = 'img/straight-edge.jpg';
    punkImg.alt = 'fist with X for the straight edge movement';
    imgContainer.appendChild(punkImg);

    return imgContainer;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;