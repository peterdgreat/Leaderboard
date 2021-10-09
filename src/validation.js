const validation = (name, score) => {
//     const msg = {
//         name: '',
//         score: ''
//     };
//     if (name === '') {
//         msg.name = 'Name is required';
//     }
//     if (score === '') {
//         msg.score = 'Score is required';
//     }
//     return msg;
// }
    // const msg = {
    //     name: '',
    //     score: ''
    // };
  if (name === '' || score === '') {
    return false;
  }
  if (name.length > 20 || score > 5000) {
    return false;
  }
  if (name.length < 3 || score < 0) {
    return false;
  }

  return true;
};
export default validation;
