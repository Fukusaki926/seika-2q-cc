import anime from 'animejs/lib/anime.es.js';

const el = document.querySelector('.p');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 225; i++) {
  let el_item = document.createElement('div');
  el_item.classList.add('item');

  if (i % 2) {
    el_item.classList.add('even');
  } else {
    el_item.classList.add('is-anime');
  }

  fragment.appendChild(el_item);
}
