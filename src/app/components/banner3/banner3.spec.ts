import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner3 } from './banner3';

describe('Banner3', () => {
  let component: Banner3;
  let fixture: ComponentFixture<Banner3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
