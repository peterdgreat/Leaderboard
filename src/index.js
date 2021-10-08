import './style.css';
import Game from './game';

const refresh = document.querySelector('.refresh');
const nameD = document.querySelector('.name');
const scoreD = document.querySelector('.score');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list');

const gameDom = (namev, scorev) => {
  const li = document.createElement('li');
  const name = document.createElement('h4');
  const score = document.createElement('h4');
  const div = document.createElement('div');
  const star = document.createElement('span');
  div.classList.add('d-flex', 'justify-content-end', 'width');
  star.classList.add('material-icons');
  star.innerText = 'auto_awesome';
  div.appendChild(score);
  name.innerHTML = namev;
  score.innerHTML = scorev;
  li.appendChild(star);
  li.appendChild(name);
  star.classList.add('mx-2');
  name.classList.add('mx-2');
  li.appendChild(div);
  li.classList.add('d-flex', 'justify-content-start');
  list.appendChild(li);
};
refresh.addEventListener('click', () => {
  window.location.reload(true);
});

window.onload = () => {
  const data = Game.getScore();
  return data.then((datum) => {
    datum.forEach((item) => {
      gameDom(item.user, item.score);
    });
  });
};

submit.addEventListener('click', (e) => {
  gameDom(nameD.value, scoreD.value);
  Game.createScore(nameD.value, scoreD.value).then((data) => data);
  e.preventDefault();
});
