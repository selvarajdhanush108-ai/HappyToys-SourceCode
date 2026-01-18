import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Category } from './components/category/category';
import { Age } from './components/age/age';
import { Banner3 } from './components/banner3/banner3';
import { Scroll } from './components/scroll/scroll';
import { Brands } from "./components/brands/brands";
import { Footer } from "./components/footer/footer";
import { Flashsales } from "./components/flashsales/flashsales";
import { TrendingItems } from "./components/trending-items/trending-items";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Banner, Category, Age, Banner3, Scroll, Brands, Footer, Flashsales, TrendingItems],
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('happytoys');
}
