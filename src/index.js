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
  name.innerHTML = namev;
  score.innerHTML = scorev;
  li.appendChild(name);
  li.appendChild(score);
  list.appendChild(li);
};
refresh.addEventListener('click', () => {
});

window.onload = () => {
  const data = Game.getScore();
  return data.then((datum) => {
    datum.forEach((datums) => {
      datums.forEach((el) => {
        gameDom(el.user, el.score);
      });
    });
  });
};

submit.addEventListener('click', (e) => {
  // Game.localstorage();
  gameDom(nameD.value, scoreD.value);
  Game.createScore(nameD.value, scoreD.value).then((data) => {
    console.log(data);
  });
  // Game.createScore(nameD.value, scoreD.value);
  e.preventDefault();
});
