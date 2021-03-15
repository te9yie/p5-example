import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(16 * 40, 9 * 40);
  };
  p.draw = () => {
    p.background(222);
    p.ellipse(50, 50, 80, 80);
  };
};

new p5(sketch);
