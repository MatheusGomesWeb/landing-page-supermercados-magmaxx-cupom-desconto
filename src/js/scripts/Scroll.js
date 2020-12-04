import debounce from './debounce';

export default class Scroll {
  constructor(elClick, elTarget) {
    this.elClick = document.querySelector(elClick);
    this.elTarget = document.querySelector(elTarget);

    this.scrollTo = this.scrollTo.bind(this);
    this.scrollTop = debounce(this.scrollTop.bind(this), 100);
  }

  // Faz o scroll suave para a seção especifica
  scrollTo() {
    this.elTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // Scroll para o topo
  scrollTop() {
    const scrollHeight = window.pageYOffset;
    const elementHeight = this.elTarget.offsetHeight - 100;
    const elTop = document.querySelector('.c-btn-top');

    if (scrollHeight > elementHeight) {
      elTop.style.display = 'flex';
      elTop.addEventListener('click', this.scrollTo);
    } else {
      elTop.style.display = 'none';
      elTop.removeEventListener('click', this.scrollTo);
    }
  }

  addEvent() {
    this.elClick.addEventListener('click', this.scrollTo);
    window.addEventListener('scroll', this.scrollTop);
  }

  start() {
    if (this.elClick && this.elTarget) {
      this.addEvent();
    }
  }
}
