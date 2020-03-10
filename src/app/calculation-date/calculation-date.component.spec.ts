import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationDateComponent } from './calculation-date.component';

describe('CalculationDateComponent', () => {
  let component: CalculationDateComponent;
  let fixture: ComponentFixture<CalculationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
