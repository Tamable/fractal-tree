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
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  registerInput(e) {
    switch(e.target.id) {
      case 'axiom':
        this.axiom = document.getElementById('axiom').value;
        console.log(this.axiom);
        break;
      case 'rule1before':
        this.rule1before = document.getElementById('rule1before').value;
        console.log(this.rule1before);
        break;
      case 'rule1after':
        this.rule1after = document.getElementById('rule1after').value;
        console.log(this.rule1after);
        break;
      case 'rule2before':
        this.rule2before = document.getElementById('rule2before').value;
        console.log(this.rule2before);
        break;
      case 'rule2after':
        this.rule2after = document.getElementById('rule2after').value;
        console.log(this.rule2after);
        break;
      case 'angle':
        this.angle = document.getElementById('angle').value;
        console.log(this.angle);
        break;
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
    let textNode = document.createTextNode(this.string);
    node.appendChild(textNode);
    let stringList = document.getElementById('string-list');
    if (Array.from(stringList.children).length < 4) {
      stringList.appendChild(node);
    }

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

  clearCanvas() {
    this.string = this.axiom;
    this.length = 100;
    this.canvas.width = this.canvas.width;
    let stringList = document.getElementById('string-list');
    while (stringList.hasChildNodes()) {
      stringList.removeChild(stringList.firstChild)
    }
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
  let newTree = new Tree(canvas, ctx);
  newTree.draw();

  document.addEventListener('input', newTree.registerInput);

  let growBtn = document.getElementById('grow-button');
  growBtn.addEventListener('click', newTree.generateString);

  let clearBtn = document.getElementById('clear-button');
  clearBtn.addEventListener('click', newTree.clearCanvas);
});


module.exports = Tree;
