const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

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
}

export default Game;