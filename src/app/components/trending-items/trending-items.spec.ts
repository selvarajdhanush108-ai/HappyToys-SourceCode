import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingItems } from './trending-items';

describe('TrendingItems', () => {
  let component: TrendingItems;
  let fixture: ComponentFixture<TrendingItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
