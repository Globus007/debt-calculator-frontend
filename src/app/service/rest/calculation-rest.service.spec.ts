import { TestBed } from '@angular/core/testing';

import { CalculationRESTService } from './calculation-rest.service';

describe('CalculationRESTService', () => {
  let service: CalculationRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
