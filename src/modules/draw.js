import { ctx, windowWidth, windowHeight } from './variables';
import rects from './createRects';

/**
 * Redraw the scene
 */
export default function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, windowWidth, windowHeight);

  // draw each rectangle
  rects.forEach((rect) => {
    ctx.fillStyle = rect.isColliding ? 'red' : 'black';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  });
}
