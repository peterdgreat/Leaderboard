const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

class Game {
  constructor(score, user) {
    this.score = score;
    this.user = user;
  }

  static Newgame() {
    const fetchData = async () => {
      const response = await (fetch(`${url}games`, {
        method: 'POST',
        body: JSON.stringify({

          name: 'Game of love',

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }));
        // eslint-disable-next-line no-return-await
      const resp = await response.json();
      const gameId = resp.result;
      const splitid = gameId.split(' ');
      const id = splitid[3];
      return id;
    };
    return fetchData();
  }

  static createLocal() {
    // set local storage for new game
    return Game.Newgame().then((id) => {
      localStorage.setItem('gameId', id);
    });
  }

  static createScore(name, uscore) {
    const idB = localStorage.getItem('gameId');
    const fetchData = async () => {
      const response = await (fetch(`${url}games/${idB}/scores`, {
        method: 'POST',
        body: JSON.stringify({

          user: name,
          score: uscore,

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }));
        // eslint-disable-next-line no-return-await
      const resp = await response.json();
      const sorted = resp.result.sort((a, b) => b.score - a.score);
      return sorted;
    };
    return fetchData();
  }

  static getScore() {
    const fetchData = async () => {
      const idB = localStorage.getItem('gameId');
      const response = await fetch(`${url}games/${idB}/scores`);
      const resp = await response.json();

      // result with highest score first
      const sorted = resp.result.sort((a, b) => b.score - a.score);
      return sorted;
    };
    return fetchData();
  }
}

export default Game;