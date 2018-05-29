# L-system Fractal Tree

[Live demo](http://www.tamae-m.com/fractal-tree/)

## MVP

**Objective:**

Create a natural-looking fractal tree by using a L-system (a.k.a. Lindenmayer system) and turtle graphics.

**Underlying Logic:**

An L-system (a.k.a. Lindenmayer system) is a string rewriting system. It is a popular tool for simulating complex organic structures, such as plants.

The basic idea is to define complex objects by successively replacing parts of a simple object, using a set of rewriting rules.

Each character of the string serves as a graphical instruction that translates the string into drawing. For example:
 * 'F' for drawing a line segment,
 * '+' for turning right 25 degrees,
 * '-' for turning left 25 degrees,  
 * '[' for pushing (= saving current) position and angle,
 * ']' for popping (= restoring previous) position and angle

**Features:**

* Generate strings, based on a set of production rules that expands a single initial alphabet ("axiom") into a larger strings of symbols.
* Iterate over each character of the generated string and execute the graphical rule, drawing branches accordingly.
* For each generation of the string, shorten the length of the line segments by 60%.
* Reset the strings and graphics after 6 iterations.
* Accept user inputs for customizing the axiom, rules, and branching angle.

## Technologies

* JavaScript
* HTML5 Canvas

## Wireframes

http://framebox.org/AgbcU

-- Future plans --
* Add color to the tree.
* Add leaves to the tree.
* Make the leaves fall.
* Render multiple trees with a varying initial line (i.e., trunk) length.
