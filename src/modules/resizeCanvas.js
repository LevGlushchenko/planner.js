/**
 * Resize canvas to full with of window with indents
 * @param {*} canvas canvas element
 * @param {*} indent indentation
 */
export default function resizeCanvas(canvas, indent) {
  canvas.width = window.innerWidth - indent;
  canvas.height = window.innerHeight - indent;
}
