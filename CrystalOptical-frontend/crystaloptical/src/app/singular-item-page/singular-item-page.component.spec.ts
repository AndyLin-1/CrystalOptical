import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularItemPageComponent } from './singular-item-page.component';

describe('SingularItemPageComponent', () => {
  let component: SingularItemPageComponent;
  let fixture: ComponentFixture<SingularItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingularItemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingularItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
