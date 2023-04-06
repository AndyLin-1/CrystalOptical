import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutTitleHeaderComponent } from './checkout-title-header.component';

describe('CheckoutTitleHeaderComponent', () => {
  let component: CheckoutTitleHeaderComponent;
  let fixture: ComponentFixture<CheckoutTitleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutTitleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutTitleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
