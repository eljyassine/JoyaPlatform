import { TestBed } from '@angular/core/testing';

import { ChangeidNameService } from './changeid-name.service';

describe('ChangeidNameService', () => {
  let service: ChangeidNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeidNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
