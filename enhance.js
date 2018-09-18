class GameItem {
  constructor() {
    this.item = 0;
    this.fail = 0;
    this.durability = 100;
  }
  increase() {
    if (this.item < 15) {
      this.item++;
    } else if (this.item === 15) {
      this.item = 'I';
    } else if (this.item === 'I') {
      this.item = 'II';
    } else if (this.item === 'II') {
      this.item = 'III';
    } else if (this.item === 'III') {
      this.item = 'IV';
    } else if (this.item === 'IV') {
      this.item = 'V';
    }
  }
  decrease() {
    if (this.item <= 15) {
      this.item--;
    } else if (this.item === 'I') {
      this.item = 15;
    } else if (this.item === 'II') {
      this.item = 'I';
    } else if (this.item === 'III') {
      this.item = 'II';
    } else if (this.item === 'IV') {
      this.item = 'III';
    } else if (this.item === 'V') {
      this.item = 'IV';
    }
  }
  enhance(percentage) {
    let compare = Math.random() * 100;
    if (compare < percentage) {
      this.increase();
      this.fail = 0;
      return this;
    } else {
      this.decrease();
      this.durability -= 5;
      this.fail++;
      return this;
    }
  }
  repair() {
    this.durability += 10;
    if (this.durability > 100) {
      this.durability = 100;
    }
    return this;
  }
}

let enhance = new GameItem();

module.exports = {
  enhance
};
