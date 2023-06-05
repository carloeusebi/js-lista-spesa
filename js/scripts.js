const forButton = document.getElementById('for-print-button');
const whileButton = document.getElementById('while-print-button');

const listElement = document.getElementById('shopping-list');

const shoppingList = ['milk', 'eggs', 'bread', 'coffe', 'tuna'];

forButton.addEventListener('click', function () {

    let list = '';

    for (let i = 0; i < shoppingList.length; i++) {

        list += `<li>${shoppingList[i]}</li>`;
    }

    listElement.innerHTML = list;
})
