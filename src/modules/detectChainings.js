import rects from './createRects';

/**
 * Chain rectangles
 * @param {Object} rect single rectangle
 */
export default function detectChainings(rect) {
  const maxDist = 10;
  const minDist = 0;
  let a;
  let b;
  let distance;
  let distX;
  let distY;

  // Find second rectangle by distance
  const rect2 = rects.find((r) => {
    a = rect.x - r.x;
    b = rect.y - r.y;
    distance = Math.sqrt(a * a + b * b);
    distX = parseInt(distance - rect.width, 10);
    distY = parseInt(distance - rect.height, 10);

    if (
      (distX >= minDist && distX <= maxDist) ||
      (distY >= minDist && distY <= maxDist)
    ) {
      return r;
    }

    return null;
  });
}
