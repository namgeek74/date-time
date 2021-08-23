import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeJsComponent } from './date-time-js.component';

describe('DateTimeJsComponent', () => {
  let component: DateTimeJsComponent;
  let fixture: ComponentFixture<DateTimeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
