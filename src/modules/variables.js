import resizeCanvas from './resizeCanvas';

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
export const mainIndent = 50;

// TODO: Move to "draw" module
resizeCanvas(canvas, mainIndent);

export const canvasOffsetX = canvas.offsetLeft;
export const canvasOffsetY = canvas.offsetTop;
export const windowWidth = window.innerWidth - mainIndent;
export const windowHeight = window.innerHeight - mainIndent;
export const commonVars = {
  canDrag: false,
  startX: null,
  startY: null,
};
