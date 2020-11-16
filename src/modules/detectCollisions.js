import rects from './createRects';

/**
 * Handle cross rectangles
 */
export default function detectCollisions() {
  // TODO: Refactor
  let rect1;
  let rect2;

  for (let i = 0; i < rects.length; i += 1) {
    rects[i].isColliding = false;
  }

  for (let i = 0; i < rects.length; i += 1) {
    rect1 = rects[i];

    for (let j = i + 1; j < rects.length; j += 1) {
      rect2 = rects[j];

      if (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      ) {
        rect1.isColliding = true;
        rect2.isColliding = true;
      }
    }
  }
}
