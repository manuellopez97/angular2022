import { TestBed } from '@angular/core/testing';

import { BdChatService } from './bd-chat.service';

describe('BdChatService', () => {
  let service: BdChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
