# L-system Fractal Tree

[Live demo](http://www.tamae-m.com/fractal-tree/)

## MVP

**Objective:**

Create a natural-looking fractal tree by using a L-system (a.k.a. Lindenmayer system) and turtle graphics.

**Underlying Logic:**

An L-system (a.k.a. Lindenmayer system) is a string rewriting system. It is a popular tool for simulating complex organic structures, such as plants.

The basic idea is to define complex objects by successively replacing parts of a simple object, using a set of rewriting rules.

Each character of the string serves as a graphical instruction that translates the string into a drawing.

**Features:**

* Generates strings recursively, based on a set of production rules that expands a single initial alphabet ("axiom") into an increasingly larger strings of symbols.
* Iterates over each character of the generated string and executes the graphical rule for drawing branches. In this demo, the rules are set as follows:
   * 'F' draws a line segment,
   ```
   let canvas = document.getElementById("canvas");
   let ctx = canvas.getContext("2d");

   drawStraightForward() {
     this.ctx.lineTo(0, -this.length);
     this.ctx.translate(0, -this.length);
   }
   ```
   * '+' turns right 25 degrees,
   ```
   turnRight() {
     this.ctx.rotate(this.angle);
   }
   ```
   * '-' turns left 25 degrees,  
   ```
   turnLeft() {
     this.ctx.rotate(-this.angle);
   }
   ```
   * '[' saves current position and angle, and
   ```
   saveState() {
     this.ctx.save();
   }
   ```
   * ']' restores previous position and angle.
   ```
    restoreState() {
      this.ctx.restore();
    }
    ```
* For each generation of the string, shortens the length of the line segments by 55%.
* Resets the strings and graphics after 6 iterations.
* Accepts user inputs for customizing the axiom, string rewriting rules, and branching angle.

## Technologies

* JavaScript
* HTML5 Canvas

## Wireframes

http://framebox.org/AgbcU

-- Future plans --
* Add color to the tree.
* Add leaves to the tree and enable the leaves to fall.
* Render multiple trees with a varying initial line (i.e., trunk) length.
