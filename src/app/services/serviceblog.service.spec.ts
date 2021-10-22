import { TestBed } from '@angular/core/testing';

import { ServiceblogService } from './serviceblog.service';

describe('ServiceblogService', () => {
  let service: ServiceblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
