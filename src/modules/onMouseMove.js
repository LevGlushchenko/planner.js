import { canvasOffsetX, canvasOffsetY, commonVars } from './variables';
import rects from './createRects';
import draw from './draw';
import detectWalls from './detectWalls';
import detectCollisions from './detectCollisions';
import detectChainings from './detectChainings';

/**
 * Handle mouse moves
 * @param {*} e mouse event listener
 */
export default function onMouseMove(e) {
  // if we're dragging anything...
  if (!commonVars.canDrag) {
    return;
  }

  // tell the browser we're handling this mouse event
  e.preventDefault();
  e.stopPropagation();

  // get the current mouse position
  const mouseX = parseInt(e.clientX - canvasOffsetX, 10);
  const mouseY = parseInt(e.clientY - canvasOffsetY, 10);

  // calculate the distance the mouse has moved
  // since the last mousemove
  const distX = mouseX - commonVars.startX;
  const distY = mouseY - commonVars.startY;

  // move each rect that isDragging
  // by the distance the mouse has moved
  // since the last mousemove
  rects.forEach((rect) => {
    if (rect.isDragging) {
      rect.x += distX;
      rect.y += distY;

      // stop moving rect on end of canvas
      detectWalls(rect);

      // detect chain of rectangles
      detectChainings(rect);
    }
  });

  // detect collision of rectangles
  detectCollisions();

  // redraw the scene with the new rect positions
  draw();

  // reset the starting mouse position for the next mousemove
  commonVars.startX = mouseX;
  commonVars.startY = mouseY;
}
