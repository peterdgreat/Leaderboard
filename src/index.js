import './style.css';
import Game from './game';

const refresh = document.querySelector('.refresh');
Game.Newgame().then((data) => console.log(data));