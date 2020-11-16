import rects from './createRects';

/**
 * Handle cross rectangles
 */
export default function detectCollisions() {
  const currentRect = rects.find((rect) => rect.isDragging);

  rects.forEach((rect) => {
    rect.isColliding = false;
  });

  rects.forEach((rect) => {
    if (rect === currentRect) {
      return;
    }

    rect.isColliding = false;

    if (
      currentRect.x < rect.x + rect.width &&
      currentRect.x + currentRect.width > rect.x &&
      currentRect.y < rect.y + rect.height &&
      currentRect.y + currentRect.height > rect.y
    ) {
      currentRect.isColliding = true;
      rect.isColliding = true;
    }
  });
}
