const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: 1080
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: 1080
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: 1080
  },
];

const ulItemElmap = document.querySelector('.gallery')
const makeImages = options => {
  return options.map(option => {
  const liItemEl = document.createElement('li');
  liItemEl.classList.add('img')
  const imageEl = document.createElement('img');
  imageEl.src = option.url;
  imageEl.alt = option.alt;
  imageEl.width = option.width;
  liItemEl.appendChild(imageEl)
  return liItemEl;
})
}
const ulElements = makeImages(images);
ulItemElmap.append(...ulElements)
