class BubbleSlide  {

  constructor() {
    let prev = document.getElementsByClassName('prev')[0];
    prev.addEventListener('click', () => this.moveSlide(-1));
    let next = document.getElementsByClassName('next')[0];
    next.addEventListener('click', () => this.moveSlide(1));
    let bubbles = document.querySelectorAll('.bubbles');
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].addEventListener('click', () => this.showSlides(i))
    }

    this.idx = 0;
    this.showSlides(this.idx);
  }

  moveSlide(n) {
    this.showSlides(this.idx + n)
  }

  showSlides(n) {
    let slides = document.getElementsByClassName('bubble-content');
    if (n == slides.length) {
      this.idx = 0
    } else if (n < 0) {
      this.idx = slides.length - 1
    } else {
      this.idx = n
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    let bubbles = document.getElementsByClassName('bubbles');
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].className = 'bubbles';
    }

    slides[this.idx].style.display = "block";
    bubbles[this.idx].className += " active"
  }
}

module.exports = BubbleSlide;
