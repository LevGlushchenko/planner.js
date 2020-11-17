export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
export const mainIndent = 50;
export const windowWidth = window.innerWidth - mainIndent;
export const windowHeight = window.innerHeight - mainIndent;

// set canvas size to full screen with indents
canvas.width = windowWidth;
canvas.height = windowHeight;

export const canvasOffsetX = canvas.offsetLeft;
export const canvasOffsetY = canvas.offsetTop;
export const commonVars = {
  canDrag: false,
  startX: null,
  startY: null,
};
