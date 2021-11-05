console.log('Number of categories: ', document.querySelectorAll('.item').length);
console.log('Category: ', document.querySelector('.item').firstElementChild.textContent);
console.log('Elements: ', document.querySelector('.item ul').childElementCount);
console.log('Category: ', document.querySelectorAll('.item')[1].firstElementChild.textContent);
console.log('Elements: ', document.querySelectorAll('.item')[1].lastElementChild.childElementCount);
console.log('Category: ', document.querySelectorAll('.item')[2].firstElementChild.textContent);
console.log('Elements: ', document.querySelectorAll('.item')[2].lastElementChild.childElementCount);