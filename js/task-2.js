// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// 1 решение: метод forEach

// const listRef = document.querySelector('#ingredients');

// ingredients.forEach(item => { 
//         const itemRef = document.createElement('li')
//         itemRef.textContent = item;
//         listRef.appendChild(itemRef);
// })

// console.log(listRef);

// 2 решение: метод map

const listRef = document.querySelector('#ingredients');

const itemRef = ingredients.map(item => {
    const elementRef = document.createElement('li')
    elementRef.textContent = item;
    return elementRef;
});

listRef.append(...itemRef);
console.log(listRef);

