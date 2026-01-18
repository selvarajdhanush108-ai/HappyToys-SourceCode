import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flashsales',
  standalone: true,
  templateUrl: './flashsales.html',
  styleUrls: ['./flashsales.css']
})
export class Flashsales implements AfterViewInit, OnDestroy {

  products = [
    { name: 'Ultricies At Torquent Dui', price: '₹12.00', oldPrice: '₹19.99', img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-4.png', badge: '-12%' },
    { name: 'White One-Piece Dress', price: '₹19.00', oldPrice: '₹26.99', img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-2.png', badge: 'Hot' },
    { name: 'Tinci Dunt Pharetra Soda', price: '₹30.00', oldPrice: '', img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-3.png', badge: '' },
    { name: 'The Playtime Excitement!', price: '₹30.00', oldPrice: '₹39.99', img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-5.png', badge: '-19%' },
    { name: 'Brown Lather Carriage', price: '₹19.00 - ₹27.00', oldPrice: '', img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-1.png', badge: '' }
  ];

  loopProducts = [...this.products, ...this.products];

  currentIndex = 0;
  slideWidth = 260;

  intervalId!: number;
  autoSlideDelay = 3000;

  showCursor = false;
  cursorX = 0;
  cursorY = 0;

  containerCenterX = 0;
  lastDirection: 'left' | 'right' | null = null;

  ngAfterViewInit() {
    const container = document.querySelector('.slider-viewport') as HTMLElement;
    this.containerCenterX = container.getBoundingClientRect().left + container.offsetWidth / 2;

    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.next();
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex >= this.products.length) {
      setTimeout(() => (this.currentIndex = 0), 500);
    }
  }

  prev() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.products.length - 1;
    }
  }

  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;

    const direction = e.clientX > this.containerCenterX ? 'right' : 'left';

    if (direction !== this.lastDirection) {
      this.lastDirection = direction;

      if (direction === 'right') {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  onDoubleClick(e: MouseEvent) {
    const direction = e.clientX > this.containerCenterX ? 'right' : 'left';
    direction === 'right' ? this.next() : this.prev();
  }

  onEnter() {
    this.showCursor = true;
    this.stopAutoSlide();
  }

  onLeave() {
    this.showCursor = false;
    this.lastDirection = null;
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
