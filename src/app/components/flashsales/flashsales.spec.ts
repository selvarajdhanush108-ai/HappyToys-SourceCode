import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flashsales } from './flashsales';

describe('Flashsales', () => {
  let component: Flashsales;
  let fixture: ComponentFixture<Flashsales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flashsales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flashsales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
