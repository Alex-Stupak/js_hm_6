const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul')
console.log(listEl);

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement("li");
listItemEl.classList.add('item');
listItemEl.textContent = ingredients[i];
console.log(listItemEl);
listEl.appendChild(listItemEl, listEl.firstElementChild)

}