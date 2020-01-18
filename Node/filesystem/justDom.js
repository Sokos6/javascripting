console.log("working");

document.querySelector('#the-one');

let innerItem = document.querySelector('.container .inner-item');

console.log(innerItem);

let allThings = document.querySelectorAll('.thing, .another-thing');
let allThingsArray = Array.from(allThings);
allThingsArray.forEach(el => {
  console.log(el);
})

console.log(allThings);

let button = document.querySelector('button')
let nav = document.querySelector('nav')

button.addEventListener('click', toggleNav)

function toggleNav() {
  if (nav.classList.contains('is-open')) {
    nav.classList.remove('is-open')
  } else {
    nav.classList.add('is-open')
  }
}

let thing = document.querySelector('.thing');
thing.addEventListener(event, callback);

function callback(e) {
  e.preventDefault();
  console.log('thing is clicked');
}
let ul = document.querySelector('ul');

let li = document.createElement('li');

li.innerHTML = 'Hello Again!';

ul.append(li);

const component = document.querySelector('.component');
const title = component.querySelector('component_title');

console.log(title);

const list = document.querySelector('.list');
const listItems = list.children;

console.log(listItems);

const array = Array.from(HTMLAllCollection);
array.forEach(el => {
  console.log(el);
})