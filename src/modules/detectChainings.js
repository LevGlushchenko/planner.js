import rects from './createRects';

// function detectDistance(x1, y1, x2, y2) {
//   const a = x1 - x2;
//   const b = y1 - y2;

//   return Math.sqrt(a * a + b * b);
// }

/**
 * Chain rectangles
 */
export default function detectChainings() {
  const currentRect = rects.find((rect) => rect.isDragging);

  rects.forEach((rect) => {
    if (rect === currentRect) {
      return;
    }

    console.log('Rect1 left', currentRect.x, 'Rect2 left', rect.x);
    console.log(
      'Rect1 right',
      currentRect.x + currentRect.width,
      'Rect2 right',
      rect.x + rect.width
    );
  });
}
