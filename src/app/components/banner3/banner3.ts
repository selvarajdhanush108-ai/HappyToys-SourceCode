import { Component } from '@angular/core';

@Component({
  selector: 'app-banner3',
  standalone: true,
  templateUrl: './banner3.html',
  styleUrls: ['./banner3.css']
})
export class Banner3 {

  banners = [
    {
      title: 'Learning Toys',
      subtitle: 'For Kids',
      offer: '15% Off on Kids Toys and Gifts!',
      btn: 'Shop Now',
      bg: 'https://html.onertheme.com/babymart/assets/img/bg/cta_bg_1_1.png'
    },
    {
      title: 'Brown Lather',
      subtitle: 'Carriage',
      offer: 'And get your 25% discount now!',
      btn: 'Shop Now',
      bg: 'https://html.onertheme.com/babymart/assets/img/bg/cta_bg_1_2.png'
    },
    {
      title: 'Utricles Torqueing',
      subtitle: 'For Kids',
      offer: 'And get your 15% discount now!',
      btn: 'Shop Now',
      bg: 'https://html.onertheme.com/babymart/assets/img/bg/cta_bg_1_3.png'
    }
  ];
}
