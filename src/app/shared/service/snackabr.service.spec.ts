import { TestBed } from '@angular/core/testing';

import { SnackabrService } from './snackabr.service';

describe('SnackabrService', () => {
  let service: SnackabrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackabrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
