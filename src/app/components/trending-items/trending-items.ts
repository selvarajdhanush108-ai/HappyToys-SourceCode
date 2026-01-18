import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-trending-items',
  standalone: true,
  templateUrl: './trending-items.html',
  styleUrls: ['./trending-items.css']
})
export class TrendingItems implements AfterViewInit {

  categories = ['All Items', 'Kid Toys', 'Outdoor Toy', 'Kid Books', 'Kid Clothing'];
  activeCategory = 'All Items';

  products = [
    {
      name: 'Brown Lather Carriage',
      price: '₹19.00 - ₹27.00',
      oldPrice: '',
      img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-4.png',
      badge: ''
    },
    {
      name: 'The Playtime Excitement!',
      price: '₹30.00',
      oldPrice: '₹39.99',
      img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-2.png',
      badge: '-19%'
    },
    {
      name: 'Ultricies At Torquent Dui',
      price: '₹12.00',
      oldPrice: '₹19.99',
      img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-3.png',
      badge: '-12%'
    },
    {
      name: 'White One-Piece Dress',
      price: '₹19.00',
      oldPrice: '₹26.99',
      img: 'https://html.onertheme.com/babymart/assets/img/product/post-card1-1.png',
      badge: 'Hot'
    }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.el.nativeElement
      .querySelectorAll('.fade-up')
      .forEach((el: HTMLElement) => observer.observe(el));
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
