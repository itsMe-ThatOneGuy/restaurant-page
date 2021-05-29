import loadPage from "./mainpage.js"
import loadHome from "./home.js"


loadPage();
currentTab()

function currentTab() {
    const tabs = document.querySelectorAll(".nav-itm");

    tabs.forEach((tab) => {
        tab.addEventListener('click',  (e) => {
            if (e.target.classList.contains("active")) return;
            console.log(tab.classList);
        });
    });
}

