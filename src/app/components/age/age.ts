import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-age',
  standalone: true,
  templateUrl: './age.html',
  styleUrls: ['./age.css']
})
export class Age implements OnInit, OnDestroy {

  ages = [
    { label: '0-2 Years', bg: '#eaf6ff', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card2_1.png' },
    { label: '3-4 Years', bg: '#f4eaff', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card2_2.png' },
    { label: '4-7 Years', bg: '#e9ffe3', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card2_3.png' },
    { label: '7-10 Years', bg: '#ffeaea', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card2_4.png' },
    { label: '12+ Years', bg: '#fff7cc', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card2_5.png' }
  ];

  visibleItems = 5;
  currentIndex = 0;
  show = false;

  // MUST match CSS → blob(170) + gap(40)
  slideWidth = 210;

  transitionEnabled = true;
  private intervalId!: number;

  constructor(private el: ElementRef) {}

  /* 🔁 duplicated slides for infinite loop */
  get slides() {
    return [...this.ages, ...this.ages];
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  @HostListener('window:scroll')
  onScroll() {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      this.show = true;
    }
  }

  next() {
    this.currentIndex++;

    if (this.currentIndex === this.ages.length) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 0;
      }, 450);
    }

    this.transitionEnabled = true;
  }

  prev() {
    if (this.currentIndex === 0) {
      this.transitionEnabled = false;
      this.currentIndex = this.ages.length;
      setTimeout(() => {
        this.transitionEnabled = true;
      });
    }

    this.currentIndex--;
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.next();
    }, 3500);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }
}
