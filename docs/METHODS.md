## Methods of MoveMe.js

These are the methods this library provides, and you can use in your code!

### `new Draggable(element)`

Creates a new instance of the Draggable class for the given element, nothing will work without it. Example usage:

```js
dragSource = document.getElementById('myElement');

const draggable = new Draggable(dragSource);
```

### `draggable.setBoundaries(boundaryElement)`

Sets a boundary element that the draggable element cannot be dragged outside of. Example usage:

```js
dragSource = document.getElementById('myElement');
boundaryElement = document.getElementById('boundaryElement');

const draggable = new Draggable(dragSource);
draggable.setBoundaries(boundaryElement);
```

### `draggable.setStepSize(stepX, stepY)`

Sets the step size for dragging on the x and y axes, set in pixels. By default, it's 1 (pixel). Example usage:

```js
dragSource = document.getElementById('myElement');
stepX = 10; // in pixels
stepY = 10; // in pixels
draggable = new Draggable(dragSource);
draggable.setStepSize(stepX, stepY);
```

### `draggable.setTransitionDuration(duration)`

Sets the transition duration for the draggable element in milliseconds. Example usage:

```js
dragSource = document.getElementById('myElement');
duration = 500; // milliseconds
draggable = new Draggable(dragSource);
draggable.setTransitionDuration(duration);
```

### `draggable.enableDrag()`

Enables dragging on the element. Note that it's enabled by default, so no need to run it right after creating a draggable object. Example usage:

```js
dragSource = document.getElementById('myElement');
draggable = new Draggable(dragSource);
draggable.enableDrag();
```

### `draggable.disableDrag()`

Disables dragging on the element. Example usage:

```js
dragSource = document.getElementById('myElement');
draggable = new Draggable(dragSource);
draggable.disableDrag();
```

### `draggable.destroy()`

Makes an element non-draggable. Example usage:

```js
dragSource = document.getElementById('myElement');
draggable = new Draggable(dragSource);
draggable.destroy();
```