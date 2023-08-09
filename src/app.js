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

// アニメーションの対象となる要素を取得
const element = document.getElementById('animated-element');

// Anime.jsを使ってアニメーションを定義
anime({
  targets: element,
  translateX: '500px', // 水平方向に500ピクセル移動
  rotate: '1turn',     // 1回転する
  backgroundColor: '#FF0000', // 背景色を赤に変更
  duration: 2000,      // アニメーションの時間（ミリ秒）
  easing: 'easeInOutQuad', // イージング関数（アニメーションの速さの変化を指定）
});
