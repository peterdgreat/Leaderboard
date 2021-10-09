export default class Validation {
  constructor(msg) {
    this.msg = msg;
  }

  validate(name, score) {
    let val = true;
    if (name === '' || score === '') {
      this.msg = 'Name and score are required';
      val = false;
    } else if (name.length > 20 || name.length < 3) {
      this.msg = 'Name must be between 3 and 20 characters';
      val = false;
    } else if (score > 5000 || score < 0) {
      this.msg = 'Score must be between 0 and 5000';
      val = false;
    }
    return val;
  }
}