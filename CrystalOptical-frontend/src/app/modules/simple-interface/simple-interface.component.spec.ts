import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInterfaceComponent } from './simple-interface.component';

describe('SimpleInterfaceComponent', () => {
  let component: SimpleInterfaceComponent;
  let fixture: ComponentFixture<SimpleInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
