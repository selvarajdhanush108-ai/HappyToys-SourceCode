import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class Category implements OnInit, OnDestroy {

  categories = [
     { title: 'Girl Clothing', bg: '#fdecec', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_4.png' },
    { title: 'Milk Bottle', bg: '#eaf6f7', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_5.png' },
    { title: 'Indoor Play', bg: '#fff0e6', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_6.png' },
    { title: 'Game And Toy', bg: '#f3eae4', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_1.png' },
    { title: 'Kid Books', bg: '#edf6ff', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_2.png' },
    { title: 'Boy Clothing', bg: '#edf6ff', img: 'https://html.onertheme.com/babymart/assets/img/category/category_card1_3.png' },
   
  ];

  visibleItems = 5;
  currentIndex = 0;
  show = false;

  // MUST match CSS: card(160) + gap(40)
  slideWidth = 200;

  transitionEnabled = true;
  private intervalId!: number;

  constructor(private el: ElementRef) {}

  /* 🔁 duplicate data for infinite loop */
  get slides() {
    return [...this.categories, ...this.categories];
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

    if (this.currentIndex === this.categories.length) {
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
      this.currentIndex = this.categories.length;
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
