
# MoveMe.js

![MoveMe.js](preview/favicon.ico)

MoveMe.js is a lightweight JavaScript library for making DOM elements draggable. It allows you to easily add drag-and-drop functionality to any element on your page with just a few lines of code.

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

You can also set additional options, such as a boundary element, step size, and transition duration (smooth gliding):

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

## Docs

Read more about the MoveMe.js documentation [here](https://lyubomirt.github.io/moveme.js/docs/DOCS.md)

## License

MoveMe.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## How does it work?

If you aren't quite sure how does MoveMe.js work, you can simply check out the [preview](https://lyubomirt.github.io/moveme.js/preview/preview.html)!

## Thanks to:

Itishi Yameha for the logo and the banner. Check out his discord! `Itishi Yameha#3002`
