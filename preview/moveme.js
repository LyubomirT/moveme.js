class Draggable {
  constructor(element) {
    this.element = element;
    this.transitionDuration = 0;

    this.isDragging = false;
    this.currentX;
    this.currentY;
    this.initialX;
    this.initialY;
    this.xOffset = 0;
    this.yOffset = 0;

    this.stepX = 1;
    this.stepY = 1;

    this.lastX;
    this.lastY;
    this.lastTime;
    this.velocityX = 0;
    this.velocityY = 0;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.element.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown(e) {
    this.element.style.userSelect = "none";

    this.initialX = e.clientX - this.xOffset;
    this.initialY = e.clientY - this.yOffset;

    if (e.target === this.element) {
      this.isDragging = true;
    }
  }

  setBoundaries(boundaryElement) {
    this.boundaryElement = boundaryElement;
    this.boundaryRect = this.boundaryElement.getBoundingClientRect();
  }

  handleMouseMove(e) {
      if (this.isDragging) {
        const dx = e.clientX - this.initialX;
        const dy = e.clientY - this.initialY;
    
        const newX = Math.round(dx / this.stepX) * this.stepX;
        const newY = Math.round(dy / this.stepY) * this.stepY;
    
        if (this.boundaryElement) {
          const boundaryRect = this.boundaryRect;
          const elementRect = this.element.getBoundingClientRect();
    
          // calculate maximum values for X and Y
          const maxX = boundaryRect.right - elementRect.width;
          const maxY = boundaryRect.bottom - elementRect.height;
    
          // update current X and Y positions based on boundaries
          this.currentX = Math.min(maxX, Math.max(0, newX));
          this.currentY = Math.min(maxY, Math.max(0, newY));
        } else {
          this.currentX = newX;
          this.currentY = newY;
        }
    
        this.xOffset = this.currentX;
        this.yOffset = this.currentY;
    
        const distanceX = this.currentX - this.lastX;
        const distanceY = this.currentY - this.lastY;
    
        // calculate time elapsed
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.lastTime;
    
        // calculate velocity
        this.velocityX = distanceX / elapsedTime;
        this.velocityY = distanceY / elapsedTime;
    
        // store current position and time
        this.lastX = this.currentX;
        this.lastY = this.currentY;
        this.lastTime = currentTime;
    
        // set translate and transition duration
        this.setTranslate(this.currentX, this.currentY);
      }
    }      

  handleMouseUp(e) {
    this.initialX = this.currentX;
    this.initialY = this.currentY;

    this.isDragging = false;
  }

  setTranslate(xPos, yPos) {
    this.element.style.transitionDuration = `${this.transitionDuration}ms`;
    this.element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  setTransitionDuration(duration) {
    if (typeof duration === "number") {
      this.transitionDuration = duration;
    }
  }

  enableDrag() {
    this.element.style.cursor = "move";
  }

  disableDrag() {
    this.element.style.cursor = "auto";
  }

  setStepSize(stepX, stepY) {
    if (typeof stepX === "number") {
      this.stepX = stepX;
    }

    if (typeof stepY === "number") {
      this.stepY = stepY;
    } else if (typeof stepX === "number") {
      this.stepY = stepX;
    }
  }

  destroy() {
    this.element.removeEventListener("mousedown", this.handleMouseDown);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }
}