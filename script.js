// js Drum Machine
// 2019 - Francesco Catania


function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pressedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return
  }

  audio.currentTime = 0;
  audio.play();
  pressedKey.classList.add('played')
}


function removeTransition(e) {

  this.classList.remove('played');
}


const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);