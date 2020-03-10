import { TestBed } from '@angular/core/testing';

import { CalculatorDataService } from './calculator-data.service';

describe('CalculatorDataService', () => {
  let service: CalculatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
