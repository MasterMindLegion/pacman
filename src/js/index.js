


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  // Background
  const stageBackground = new Stage();
  stageBackground.mount(container);
  const background = document.querySelector('.stage');

  //Pacman
  const pacman = new Pacman();
  pacman.mount(background);
});
