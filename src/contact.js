function createContact() {
    const contact= document.createElement('div');
    
    const testText = document.createElement('h1');
    testText.textContent = "Contact Stuff Here";

    contact.appendChild(testText);

    return contact;
}





function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}





export default loadContact