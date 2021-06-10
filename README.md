# Barnsley Fern
A beautiful Barnsley Fern created using Math and random numbers. Built in p5.js

![The Barnsley Fern. Looks like a leaf curving to the right.](https://github.com/Sarthak-Dayal/Barnsley-Fern/blob/master/image.png)

## Origin
Michael Barnsley(et. al) created this program to demonstratehow natural structures could be modeled using code. 
The randomness in this program demonstrates how nature works in that is simulates the fact that no two ferns are exactly alike, no matter how similar they might be. 
Just like the Sierpinski triangle created using the Chaos Game, the Barnsley fern demonstrates how beautiful structures can be built from repetitive uses of math with computers.
To learn more, check out the [Wikipedia Page](https://en.wikipedia.org/wiki/Barnsley_fern).

## Methods
The barnsley fern is created by iteratively and randomly applying one of the following four transformations with the given probabilities after starting at the point (0,0).

With a probability of 0.01: x2 = 0 ; y2 = 0.16 · y1

With a probability of 0.85: x2 = 0.85 · x1 + 0.04 · y1 ; y2 = −0.04 · x1 + 0.85 · y1 + 1.6

With a probability of 0.07: x2 = 0.2 · x1 − 0.26 · y1 ; y2 = 0.23 · x1 + 0.22 · y1 + 1.6

Finally, with a probability of 0.07: x2 = −0.15 · x1 + 0.28 · y1 ; y2 = 0.26 · x1 + 0.24 · y1 + 0.44

Using these iterative transformations, the fern forms its fractal structure over a period of time.
