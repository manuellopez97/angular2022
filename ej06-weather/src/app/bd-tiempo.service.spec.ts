import { TestBed } from '@angular/core/testing';

import { BdTiempoService } from './bd-tiempo.service';

describe('BdTiempoService', () => {
  let service: BdTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
