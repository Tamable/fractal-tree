# L-system Fractal Tree

Live demo link (TBD)

## MVP

**Objective:**

Create a natural-looking fractal tree by using a L-system (a.k.a. Lindenmayer system) and turtle graphics.

**Features:**

* Construct strings, based on a set of production rules that expands an initial alphabet ("axiom") into a larger strings of symbols.
* A tree grows (i.e., drawing a trunk and subsequent branches) with each iteration of the generated strings.
* Accept user inputs for customizing the axiom, rules, and branching angle.

## Technologies

* JavaScript
* HTML5 Canvas

## Wireframes

*
![wireframes](http://framebox.org/AgbcU)

## Implementation timeline

#### phase 1 ####
* Create a function to recursively build up a sentence, based on the starting axiom and a set of defined rules.
* Create a button that triggers the sentence-generating function 'onClick'.

#### phase 2 ####
* Create a function to iterate over each character of the sentence and assign a graphical rule to each character.
* Create a function to execute the graphical rules - draw a line segment or push/pop position and angle rotation.

#### phase 3 ####
* Create user input fields for axiom, rules, and angle.
* Create a modal providing an overview of the L-system.

-- bonus --
* Add color to the tree.
* Add leaves to the tree.
* Make the leaves fall.
* Render multiple trees with a varying initial line (i.e., trunk) length.
