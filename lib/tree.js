document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  
  let newTree = new Tree();
  let button = document.getElementById('button');
  button.addEventListener('click', newTree.generateString)
});

class Tree {

  constructor() {

    this.axiom = 'X',
    this.rules = [
      {
        before: 'X',
        after: 'F+[[X]-X]-F[-FX]+X'
      },
      {
        before: 'F',
        after: 'FF'
      }
    ],
    this.angle = 25;
    this.length = 100;
    this.string = this.axiom;

    this.generateString = this.generateString.bind(this);
  }

  generateString(e) {

    let nextString = "";

    for (let i = 0; i < this.string.length; i++) {
      let currentChar = this.string[i];
      let found = false;

      for (let j = 0; j < this.rules.length; j++) {
        if (currentChar == this.rules[j].before) {
          nextString += this.rules[j].after;
          found = true;
          break
        }
      }
      if (!found) {
        nextString += currentChar;
      }
    }

    this.string = nextString;
    let node = document.createElement('li');
    let textnode = document.createTextNode(this.string);
    node.appendChild(textnode);
    document.getElementById('strings').appendChild(node);
  }
}

// console.log(newTree.generateString());
// console.log(newTree.generateString());
// console.log(newTree.generateString());

module.exports = Tree;
