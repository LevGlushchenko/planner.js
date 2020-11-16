import { commonVars } from './variables';
import rects from './createRects';
import draw from './draw';

/**
 * Handle mouseup events
 * @param {*} e mouse event listener
 */
export default function onMouseUp(e) {
  // tell the browser we're handling this mouse event
  e.preventDefault();
  e.stopPropagation();

  // clear all the dragging flags
  commonVars.canDrag = false;

  rects.forEach((rect) => {
    if (rect.isColliding) {
      if (rect.isDragging) {
        rect.x = rect.prevX;
        rect.y = rect.prevY;
      }

      rect.isColliding = false;
    }

    rect.isDragging = false;
  });

  draw();
}
