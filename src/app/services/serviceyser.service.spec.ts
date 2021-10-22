import { TestBed } from '@angular/core/testing';

import { ServiceyserService } from './serviceyser.service';

describe('ServiceyserService', () => {
  let service: ServiceyserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceyserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
