import './style.css';
import Game from './game';

const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {
   Game.Newgame().then((data) => console.log(data));
});
