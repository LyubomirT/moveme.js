
# MoveMe.js

MoveMe.js is a lightweight JavaScript library for making DOM elements draggable on a webpage. It allows you to easily add drag-and-drop functionality to any element on your page with just a few lines of code.

## Installation

You can install MoveMe.js by downloading the `moveme.min.js` file from the `dist` directory and including it in your HTML file using a `<script>` tag:
```html
<script src="path/to/moveme.js"></script>
```

Alternatively, you can use GitHub to include the library:
```html
<script src="https://raw.githubusercontent.com/LyubomirT/moveme.js/main/lib/1.0.0/moveme.js"></script>
```
## Usage

To make an element draggable, create a new instance of the `Draggable` class and pass the element as a parameter:

```js
const element = document.getElementById('myElement');
const draggable = new Draggable(element);
```

You can also set additional options, such as a boundary element, step size, and transition duration:

```js
draggable.setBoundaries(document.getElementById('boundaryElement'));
draggable.setStepSize(10, 10);
draggable.setTransitionDuration(500);
```

To enable or disable dragging on an element, use the `enableDrag()` and `disableDrag()` methods:
```js
draggable.enableDrag(); // enable dragging
draggable.disableDrag(); // disable dragging
```

To make an element non-draggable, use the `destroy()` method:
```js
draggable.destroy();
```

## All options

### `new Draggable(element)`

Creates a new instance of the Draggable class for the given element.

### `draggable.setBoundaries(boundaryElement)`

Sets a boundary element that the draggable element cannot be dragged outside of.

### `draggable.setStepSize(stepX, stepY)`

Sets the step size for dragging on the x and y axes.

### `draggable.setTransitionDuration(duration)`

Sets the transition duration for the draggable element.

### `draggable.enableDrag()`

Enables dragging on the element.

### `draggable.disableDrag()`

Disables dragging on the element.

### `draggable.destroy()`

Makes an element non-draggable.

## License

MoveMe.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## How does it work?

If you aren't quite sure how does MoveMe.js work, you can simply check out the [preview](preview/preview.html)!