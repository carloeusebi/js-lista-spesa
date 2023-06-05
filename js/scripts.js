const forButton = document.getElementById('for-print-button');
const whileButton = document.getElementById('while-print-button');
const resetButton = document.getElementById('reset-button');

const listElement = document.getElementById('shopping-list');

const shoppingList = ['milk', 'eggs', 'bread', 'coffe', 'tuna'];

forButton.addEventListener('click', function () {

    let list = '';

    for (let i = 0; i < shoppingList.length; i++) {

        list += `<li>${shoppingList[i]}</li>`;
    }

    listElement.innerHTML = list;
})


whileButton.addEventListener('click', function () {

    let list = '';
    let index = 0;

    while (index < shoppingList.length) {

        list += `<li>${shoppingList[index]}</li>`;

        index++;
    }
    console.log(index);


    listElement.innerHTML = list;
})


resetButton.addEventListener('click', function () {
    listElement.innerText = '';
})