import { TestBed } from '@angular/core/testing';

import { ServicepubService } from './servicepub.service';

describe('ServicepubService', () => {
  let service: ServicepubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
