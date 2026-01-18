import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll.html',
  styleUrls: ['./scroll.css']
})
export class Scroll {

  progress = 0;
  show = false;

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.progress = Math.round((scrollTop / docHeight) * 100);
    this.show = scrollTop > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
