
// =================== Classes

// Create class Stage
class Stage {
  constructor() {
    //this.background = background;
  }
  render() {
    this.stageElement = document.createElement('div');
    this.stageElement.className = 'stage';
  }
  mount(parent) {
    this.render();
    parent.appendChild(this.stageElement);
  }
}

// Create class Pacman
class Pacman {
  constructor() {
  }
  render() {
    this.pacmanElement = document.createElement('div');
    this.pacmanElement.className = 'entity entity--pac pacboy-active-light';
    this.update();
  }
  mount(parent) {
    this.render();
    parent.appendChild(this.pacmanElement);
  }

  
  update() {
    this.pacmanCounter = 1;
    document.addEventListener('click', () => {
      if(this.pacmanCounter === 1) {
        this.pacmanElement.style.backgroundPositionX = "85px";
        this.pacmanCounter += 1;
        console.log("counter 1");
       return  this.pacmanCounter    
      } else if (this.pacmanCounter === 2) {
        this.pacmanElement.style.backgroundPositionX = "170px";
        console.log("counter 2");
        this.pacmanCounter = 1;
       return  this.pacmanCounter;
       
      }
    })
  }
}


// (1) Clicks anywhere on the page, alternate the pacman between opened and closed.
document.addEventListener('click', () => {
  
});