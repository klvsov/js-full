let menu = document.querySelector('ul.menu'),
    menuItems = document.querySelectorAll('li.menu-item'),
    newItem = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    yourOpinion = prompt('Ваше отношение к технике Apple?', ''),
    yourPrompt = document.querySelector('#prompt');


menu.insertBefore(menuItems[2], menuItems[1]);

newItem.classList.add('menu-item');
newItem.textContent = 'Пятый пункт';
menu.appendChild(newItem);

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

yourPrompt.textContent = yourOpinion;