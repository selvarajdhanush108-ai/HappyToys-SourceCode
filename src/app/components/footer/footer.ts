import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {

  infos = [
    {
      icon: 'fa-solid fa-phone',
      title: 'Call Us 7/24',
      value: '+208-555-0112',
      color: '#19c6a7'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Make a Quote',
      value: 'happytoys@gmail.com',
      color: '#ff6b8a'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Opening Hour',
      value: 'Sunday - Fri: 9 aM - 6 pM',
      color: '#ff9f1c'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Our Location',
      value: '4517 Washington ave.',
      color: '#4fc3f7'
    }
  ];
}
