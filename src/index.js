import './style.css';
import Game from './game';

const refresh = document.querySelector('.refresh');
const nameD = document.querySelector('.name');
const scoreD = document.querySelector('.score');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list');

const gameDom = () => {
  const li = document.createElement('li');
  const name = document.createElement('h4');
  const score = document.createElement('h4');
  name.innerHTML = nameD.value;
  score.innerHTML = scoreD.value;
  li.appendChild(name);
  li.appendChild(score);
  list.appendChild(li);
};
refresh.addEventListener('click', () => {
  Game.Newgame().then((data) => console.log(data));
});

window.onload = () => {
  Game.Newgame().then((data) => console.log(data));
};

submit.addEventListener('click', (e) => {
  gameDom();
  Game.createScore(scoreD.value).then((data) => console.log(data));
  e.preventDefault();
});
