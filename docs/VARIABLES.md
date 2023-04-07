# Variables of MoveMe.js

These are the variables used by the library, but which can be used to get the values or for other purposes.

****

## Basic Variables:

### `draggable.element (type: element)`

The element that was used to create a "Draggable" instance.

### `draggable.transitionDuration (type: number)`

The transition duration for the draggable element in milliseconds.

### `draggable.isDragging (type: boolean)`

Indicates whether the draggable element is currently being dragged or not.

### `draggable.stepX (type: number)`

The step size for the x axis in pixels.

### `draggable.stepY (type: number)`

The step size for the y axis in pixels.

### `draggable.velocityX (type: number)`

The velocity of the x axis per millisecond.

### `draggable.velocityY (type: number)`

The velocity of the y axis per millisecond.

### `draggable.currentX (type: number)`

The current x position of the draggable element.

### `draggable.currentY (type: number)`

The current y position of the draggable element.

### `draggable.boundaryElement (type: element)`

The element that is used to bound the draggable element.

****

The basic variables are the most simple to understand and use, they don't affect the object seriously. However, there are also some more advanced variables, which are:

****

## Additional Advanced Variables:

### `draggable.initialX (type: number)`

The initial horizontal position of the element when the user starts dragging it.

### `draggable.initialY (type: number)`

The initial vertical position of the element when the user starts dragging it.

### `draggable.xOffset (type: number)`

The offset between the mouse cursor and the left edge of the element when the user starts dragging it.

### `draggable.yOffset (type: number)`

The offset between the mouse cursor and the top edge of the element when the user starts dragging it.

### `draggable.lastX (type: number)`

The horizontal position of the element in the previous frame.

### `draggable.lastY (type: number)`

The vertical position of the element in the previous frame.

### `draggable.lastTime (type: number)`

The timestamp of the previous frame.

### `draggable.boundaryRect (type: object)`

The bounding rectangle of the draggable element.

****

