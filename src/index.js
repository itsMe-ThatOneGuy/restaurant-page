import loadPage from "./mainpage.js"

loadPage();

function currentTab(tab) {
    const tabs = document.querySelectorAll(".nav-itm");

    tabs.forEach((tab) => {
        if (tab !== this) {
            tab.classList.remove('current');
        }
    });

    tab.classList.add('current');
}
/*function test () {
    console.log('Hello World')
}

test(); */
