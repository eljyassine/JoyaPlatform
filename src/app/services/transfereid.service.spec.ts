import { TestBed } from '@angular/core/testing';

import { TransfereidService } from './transfereid.service';

describe('TransfereidService', () => {
  let service: TransfereidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfereidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
