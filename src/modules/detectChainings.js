import rects from './createRects';

/**
 * Chain rectangles
 */
export default function detectChainings() {
  const maxDist = 10;
  const minDist = 0;
  const distance = (rect1, rect2) => {
    return Math.sqrt((rect2.x - rect1.x) ** 2 + (rect2.y - rect1.y) ** 2);
  };

  const currentRect = rects.find((rect) => rect.isDragging);
  const closestRect = rects.find((rect) => {
    const distX = parseInt(distance(currentRect, rect) - rect.width, 10);
    const distY = parseInt(distance(currentRect, rect) - rect.height, 10);

    if ((distX >= minDist && distX <= maxDist) || (distY >= minDist && distY <= maxDist)) {
      return rect;
    }

    return null;
  });

  if (closestRect) {
    /* const distX = parseInt(distance(currentRect, closestRect) - closestRect.width, 10);
    const distY = parseInt(distance(currentRect, closestRect) - closestRect.height, 10);

    if ((distX >= minDist && distX <= maxDist) || (distY >= minDist && distY <= maxDist)) {
      currentRect.x = closestRect.x - closestRect.width;
      currentRect.y = closestRect.y;
    } */

    console.log(
      Math.abs(currentRect.x - closestRect.x + closestRect.width) < maxDist,
      Math.abs(currentRect.x + currentRect.width > closestRect.x) < maxDist
    );

    // if (Math.abs(currentRect.x - closestRect.x + closestRect.width) < maxDist) {
    //   currentRect.x = closestRect.x - currentRect.width;
    // }

    // if (Math.abs(currentRect.x - closestRect.x + closestRect.width) < maxDist) {
    //   currentRect.x = closestRect.x + closestRect.width;
    // }
    // if (Math.abs(activeObject.oCoords.br.y - targ.oCoords.tr.y) < edgedetection) {
    //   activeObject.top = targ.top - activeObject.currentHeight;
    // }
    // if (Math.abs(targ.oCoords.br.y - activeObject.oCoords.tr.y) < edgedetection) {
    //   activeObject.top = targ.top + targ.currentHeight;
    // }

    /* const dist = distance(currentRect, closestRect);

    const currentRectLeft = parseInt(dist - currentRect.width, 10);
    const currentRectRight = parseInt(dist + currentRect.width, 10);
    const currentRectTop = parseInt(dist - currentRect.height, 10);
    const currentRectBottom = parseInt(dist + currentRect.height, 10);

    const closestRectLeft = parseInt(dist - closestRect.width, 10);
    const closestRectRight = parseInt(dist + closestRect.width, 10);
    const closestRectTop = parseInt(dist - closestRect.height, 10);
    const closestRectBottom = parseInt(dist + closestRect.height, 10);

    if (Math.abs(currentRectRight - closestRectLeft) < maxDist) {
      currentRect.x = closestRect.x - currentRect.width;
    }

    if (Math.abs(currentRectLeft - closestRectRight) < maxDist) {
      currentRect.x = closestRect.x + closestRect.width;
    } */
  }
}
