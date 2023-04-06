const dragSource = document.querySelector('#drag-source');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const draggable = new Draggable(dragSource);
draggable.setStepSize(10, 10);
draggable.setTransitionDuration(100);

const dragSource2 = document.querySelector('#button');
const draggable2 = new Draggable(dragSource2);

const dragSource3 = document.querySelector('#dragger3');
const draggable3 = new Draggable(dragSource3);
draggable3.setStepSize(40, 40);