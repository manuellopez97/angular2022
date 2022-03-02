import { TestBed } from '@angular/core/testing';

import { BdCineService } from './bd-cine.service';

describe('BdCineService', () => {
  let service: BdCineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdCineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
