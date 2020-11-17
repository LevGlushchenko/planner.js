// an array of objects that define different rectangles
const rects = [];

// loop for create a rectangles
for (let i = 1; i <= 4; i += 1) {
  const width = 200;
  const height = 100;
  const gap = 20;

  const rect = {
    x: gap,
    y: (height + gap) * i,
    prevX: null,
    prevY: null,
    width: width,
    height: height,
    isDragging: false,
    isColliding: false,
    isChaining: false,
  };
  rects.push(rect);
}

export default rects;
