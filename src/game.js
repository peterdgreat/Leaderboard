const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const dataArray = [];
class Game {
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

  static localstorage() {
  //   const idD = Game.Newgame().then((data) => data);
  //  let id = JSON.parse(idD)
  //    return localStorage.setItem('id', id );
  }

  static createScore(name, uscore) {
    const idB = 'e6ixqUxWItvZD1HIbny3';
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

      console.log(resp);
      console.log(idB);
    };
    return fetchData();
  }

  static getScore() {
    const fetchData = async () => {
      const idB = 'e6ixqUxWItvZD1HIbny3';
      const response = await fetch(`${url}games/${idB}/scores`);
      const resp = await response.json();
      dataArray.push(resp.result);
      console.log(dataArray);
      return dataArray;
    };
    return fetchData();
  }
}
// const id = Game.Newgame().then((data) => data);
// console.log(id);

export default Game;