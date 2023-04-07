# Example usage of the MoveMe.js library


### Example 1: Reordering a to-do list

Let's say you are building a simple to-do list web app and you want to allow users to drag and drop the items to reorder them. You can use the MoveMe.js library to achieve this functionality.

```html
<ul id="to-do-list">
  <li class="draggable">Item 1</li>
  <li class="draggable">Item 2</li>
  <li class="draggable">Item 3</li>
</ul>
```

```js
const draggableItems = document.querySelectorAll('.draggable');

draggableItems.forEach((item) => {
  const draggable = new Draggable(item);
  draggable.enableDrag();
});

const toDoList = document.getElementById('to-do-list');
const listDraggable = new Draggable(toDoList);

listDraggable.setBoundaries(toDoList.parentNode);
listDraggable.enableDrag();
```

We first select all the list items with the class 'draggable' and loop through them to create a new instance of the Draggable class for each item. We then call the enableDrag method to allow the items to be dragged.

We also create a new instance of the Draggable class for the entire list and set the boundary to the parent element of the list. This will prevent the list from being dragged outside of its container.

Now, users can drag and drop the items to reorder them within the list.

****

### Example 2: Design App

Let's say you have a web application where users can drag and drop different elements on a canvas to create a design. You want to use the MoveMe.js library to make those elements draggable.

```html
<div class="canvas">
  <div class="draggable-element">Element 1</div>
  <div class="draggable-element">Element 2</div>
  <div class="draggable-element">Element 3</div>
</div>
```

```js
const canvas = document.querySelector('.canvas');
const draggableElements = document.querySelectorAll('.draggable-element');

// Create an instance of Draggable for each element
draggableElements.forEach(element => {
  const draggable = new Draggable(element);

  // Set the boundaries for each element to the canvas
  draggable.setBoundaries(canvas);
});
```

We select the canvas and all the draggable elements using `document.querySelector` and `document.querySelectorAll`. We then loop through each element and create an instance of `Draggable` for it. At the end, the boundaries for each element to the canvas by calling `setBoundaries` with the canvas as an argument.