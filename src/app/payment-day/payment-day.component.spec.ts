import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDayComponent } from './payment-day.component';

describe('PaymentDayComponent', () => {
  let component: PaymentDayComponent;
  let fixture: ComponentFixture<PaymentDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
