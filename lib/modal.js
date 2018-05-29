const BubbleSlide = require('./bubble_slide.js');

const Modal = () => {

  let modal = document.getElementById('modal');
  let modalBtn = document.getElementsByClassName('open-button')[0];
  let closeBtn = document.getElementsByClassName('close-button')[0];

  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);

  function openModal() {
    modal.style.display = 'block';
    let slide = new BubbleSlide();
  }

  function closeModal() {
    modal.style.display = 'none';
  }
  function clickOutside(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Modal();
})

module.exports = Modal;
