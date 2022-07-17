import { TestBed } from '@angular/core/testing';

import { PredictionDashService } from './prediction-dash.service';

describe('PredictionDashService', () => {
  let service: PredictionDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictionDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
