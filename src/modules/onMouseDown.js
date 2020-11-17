import { canvasOffsetX, canvasOffsetY, commonVars } from './variables';
import rects from './createRects';

/**
 * Handle mousedown events
 * @param {*} e mouse event listener
 */
export default function onMouseDown(e) {
  // tell the browser we're handling this mouse event
  e.preventDefault();
  e.stopPropagation();

  // get the current mouse position
  const mouseX = parseInt(e.clientX - canvasOffsetX, 10);
  const mouseY = parseInt(e.clientY - canvasOffsetY, 10);

  // test each rect to see if mouse is inside
  commonVars.canDrag = false;
  rects.forEach((rect) => {
    if (
      mouseX > rect.x &&
      mouseX < rect.x + rect.width &&
      mouseY > rect.y &&
      mouseY < rect.y + rect.height
    ) {
      rect.prevX = rect.x;
      rect.prevY = rect.y;

      // if yes, set that rects isDragging=true
      commonVars.canDrag = true;
      rect.isDragging = true;
    }
  });

  // save the current mouse position
  commonVars.startX = mouseX;
  commonVars.startY = mouseY;
}
