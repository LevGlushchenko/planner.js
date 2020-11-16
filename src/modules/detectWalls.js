import { canvas } from './variables';

/**
 * Stop move on end of canvas
 * @param {Object} rect single rectangle
 */
export default function detectWalls(rect) {
  // Left wall
  if (rect.x < 0) {
    rect.x = 0;
  }

  // Right wall
  if (rect.x + rect.width > canvas.width) {
    rect.x = canvas.width - rect.width;
  }

  // Top wall
  if (rect.y < 0) {
    rect.y = 0;
  }

  // Bottom wall
  if (rect.y + rect.height > canvas.height) {
    rect.y = canvas.height - rect.height;
  }
}
