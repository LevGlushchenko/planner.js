import { canvas } from './modules/variables';
import draw from './modules/draw';
import onMouseDown from './modules/onMouseDown';
import onMouseUp from './modules/onMouseUp';
import onMouseMove from './modules/onMouseMove';

// call to draw the scene
draw();

// listen for mouse events
canvas.onmousedown = onMouseDown;
canvas.onmousemove = onMouseMove;
canvas.onmouseup = onMouseUp;
canvas.onmouseout = onMouseUp;
