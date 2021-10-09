import './style.css';
import Game from './game';
import Validation from './validation';
import toastr from './toastr';

const refresh = document.querySelector('.refresh');
const nameD = document.querySelector('.name');
const scoreD = document.querySelector('.score');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list');
const spin = document.querySelector('.spin');
const validateSubmission = new Validation();
const msgs = document.querySelector('.msgs');
const toast = document.querySelector('.toast');

const gameDom = (namev, scorev) => {
  const li = document.createElement('li');
  const name = document.createElement('h4');
  const score = document.createElement('h4');
  const div = document.createElement('div');
  const star = document.createElement('span');
  const div2 = document.createElement('div');
  star.classList.add('material-icons');
  star.innerText = 'auto_awesome';
  div.appendChild(name);
  name.innerHTML = namev;
  score.innerHTML = scorev;
  li.appendChild(star);
  div2.appendChild(score);
  div2.classList.add('d-flex', 'justify-content-end', 'col-2', 'pe-2');
  star.classList.add('ms-2');
  div.classList.add('col-9', 'd-flex', 'justify-content-start', 'align-items-center', 'ms-3');
  li.appendChild(div);
  li.appendChild(div2);
  li.classList.add('d-flex', 'align-items-center');
  list.appendChild(li);
};

const stopspinner = () => {
  spin.classList.add('d-none');
};

refresh.addEventListener('click', () => {
  window.location.reload(true);
});

window.onload = () => {
  setTimeout(() => {
    stopspinner();
    list.classList.remove('d-none');
  }, 1000);
  const data = Game.getScore();
  return data.then((datum) => {
    datum.forEach((item) => {
      gameDom(item.user, item.score);
    });
  });
};

submit.addEventListener('click', (e) => {
  validateSubmission.validate(nameD.value, scoreD.value);
  if (validateSubmission.validate(nameD.value, scoreD.value)) {
    msgs.classList.add('d-none');
    Game.createScore(nameD.value, scoreD.value);
    gameDom(nameD.value, scoreD.value);
    toast.classList.remove('d-none');
    toast.innerHTML = toastr(nameD.value, scoreD.value);
    nameD.value = '';
    scoreD.value = '';
    setTimeout(() => {
      toast.classList.add('d-none');
    }, 3000);
  } else {
    msgs.innerText = validateSubmission.msg;
    msgs.classList.remove('d-none');
    msgs.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'text-danger');
  }
  e.preventDefault();
});
