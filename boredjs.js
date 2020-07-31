let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_span.innerText="you go";
my_element.appendChild(my_span);

my_element.classList.add('custom_class');

document.body.appendChild(my_element);

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onfocus = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}