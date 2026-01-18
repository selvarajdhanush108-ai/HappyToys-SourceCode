import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  templateUrl: './brands.html',
  styleUrls: ['./brands.css']
})
export class Brands implements OnInit, OnDestroy {

  brands = [
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_5.png', name: 'Kids Play' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_7.png', name: 'Super' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_1.png', name: 'Kids Zone' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_2.png', name: 'Kiddo' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_3.png', name: 'Game' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_4.png', name: 'Kids Zone 2' },
    { img: 'https://html.onertheme.com/babymart/assets/img/brand/brand_1_6.png', name: 'Party' }
  ];

  currentIndex = 0;
  slideWidth = 180; // logo width + gap
  transitionEnabled = true;
  private intervalId!: number;

  get slides() {
    return [...this.brands, ...this.brands];
  }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex++;

      if (this.currentIndex === this.brands.length) {
        setTimeout(() => {
          this.transitionEnabled = false;
          this.currentIndex = 0;
        }, 450);
      }

      this.transitionEnabled = true;
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
