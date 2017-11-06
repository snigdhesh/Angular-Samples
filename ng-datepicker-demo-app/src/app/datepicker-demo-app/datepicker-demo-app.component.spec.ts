import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDemoAppComponent } from './datepicker-demo-app.component';

describe('DatepickerDemoAppComponent', () => {
  let component: DatepickerDemoAppComponent;
  let fixture: ComponentFixture<DatepickerDemoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerDemoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDemoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
