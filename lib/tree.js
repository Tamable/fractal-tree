const Modal = require('./modal.js');

class Tree {

  constructor(canvas, ctx) {

    this.canvas = canvas;
    this.ctx = ctx;
    this.axiom = document.getElementById('axiom').value;
    this.rules = [
      {
        before: document.getElementById('rule1before').value,
        after: document.getElementById('rule1after').value
      },
      {
        before: document.getElementById('rule2before').value,
        after: document.getElementById('rule2after').value
      }
    ];
    this.angle = document.getElementById('angle').value * Math.PI/180;
    this.length = 100;
    this.string = this.axiom;

    this.generateString = this.generateString.bind(this);
    this.registerInput = this.registerInput.bind(this);
  }

  registerInput(e) {

    switch(e.target.id) {
      case 'axiom':
        this.axiom = document.getElementById('axiom').value;
        console.log(this.axiom);
      case 'rule1before':
        this.rule1before = document.getElementById('rule1before').value;
        console.log(this.rule1before);
      case 'rule1after':
        this.rule1after = document.getElementById('rule1after').value;
        console.log(this.rule1after);
      case 'rule2before':
        this.rule2before = document.getElementById('rule2before').value;
        console.log(this.rule2before);
      case 'rule2after':
        this.rule2after = document.getElementById('rule2after').value;
        console.log(this.rule2after);
      case 'angle':
        this.angle = document.getElementById('angle').value;
        console.log(this.angle);
    }

  }

  generateString(e) {

    this.length *= 0.55;

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

    this.draw();
  }

  draw() {

    this.setUp();

    for (let i = 0; i < this.string.length; i++) {
      let currentChar = this.string[i];

      switch(currentChar) {
        case 'F':
          this.drawStraightForward();
          break;
        case '-':
          this.turnLeft();
          break;
        case '+':
          this.turnRight();
          break;
        case '[':
          this.saveState();
          break;
        case ']':
          this.restoreState();
          break;
      }
    }

    this.ctx.stroke();
  }

  setUp() {
    this.canvas.width = this.canvas.width;
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width / 2, this.canvas.height);
    this.ctx.translate(this.canvas.width / 2, this.canvas.height);
    this.ctx.strokeStyle = 'green';
    this.ctx.save();
  }

  drawStraightForward() {
    this.ctx.lineTo(0, -this.length);
    this.ctx.translate(0, -this.length);
  }

  turnLeft() {
    this.ctx.rotate(-this.angle);
  }

  turnRight() {
    this.ctx.rotate(this.angle);
  }

  saveState() {
    this.ctx.save();
  }

  restoreState() {
    this.ctx.restore();
  }

}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  // let axiom = document.getElementById('axiom').value;
  // let rule1b = document.getElementById('rule1before').value;
  // let rule1a = document.getElementById('rule1after').value;
  // let rule2b = document.getElementById('rule2before').value;
  // let rule2a = document.getElementById('rule2after').value;
  // let angle = document.getElementById('angle').value * Math.PI/180;

  let newTree = new Tree(canvas, ctx);
  newTree.draw();

  document.addEventListener('input', newTree.registerInput);

  let strBtn = document.getElementById('string-button');
  strBtn.addEventListener('click', newTree.generateString);
});


module.exports = Tree;
