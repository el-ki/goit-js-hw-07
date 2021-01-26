// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>


const inputRef = document.querySelector('#controls input');
const boxesDivRef = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');

let arrayNew = [];
let width = 20;
let height = 20;
let amount = 0


function randomBackgroundColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const backgroundColor = `rgb(${x}, ${y}, ${z})`;
    return backgroundColor
}

const createBoxes = function(amount) { 
    
    for (let i = 0; i < amount; i++) { 
        const newDivRef = document.createElement('div')
        arrayNew.push(newDivRef);
    }  arrayNew.map(div => { 
        div.style.backgroundColor = randomBackgroundColor();
        width += 10;
        height += 10;
        div.style.width = width + 'px';
        div.style.height = height + 'px';
    })
    boxesDivRef.append(...arrayNew)
    return boxesDivRef
} 

const destroyBoxes = () => { 
    boxesDivRef.innerHTML = ""
    return boxesDivRef;

}
inputRef.addEventListener('input', event => {
    amount = event.target.value;
    console.log(amount);
    });

createBtn.addEventListener('click', () => {
    createBoxes(amount);
    amount = 0;
    inputRef.value = '';
});


clearBtn.addEventListener('click', () => { 
    destroyBoxes();
    amount = 0;
    inputRef.value = '';
})