import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleItemComponent } from './simple-item.component';

describe('SimpleItemComponent', () => {
  let component: SimpleItemComponent;
  let fixture: ComponentFixture<SimpleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
