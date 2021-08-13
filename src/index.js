import loadPage from "./mainpage.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";



loadPage();

const tabs = document.querySelectorAll(".nav-itm");

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        //console.log(e.target.className);
        currentTab(e.target);
    });
});

function currentTab(tab) {
    //console.log(tab.className);
    if (tab.classList.contains('home')) {
        loadHome();
    } else if(tab.classList.contains('menu')) {
        loadMenu();
    } else if(tab.classList.contains('contact')) {
        loadContact();
    }
}