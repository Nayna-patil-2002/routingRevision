import { TestBed } from '@angular/core/testing';

import { CricketerService } from './cricketer.service';

describe('CricketerService', () => {
  let service: CricketerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricketerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
