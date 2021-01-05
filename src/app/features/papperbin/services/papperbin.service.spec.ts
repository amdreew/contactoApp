import { TestBed } from '@angular/core/testing';

import { PapperbinService } from './papperbin.service';

describe('PapperbinService', () => {
  let service: PapperbinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapperbinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
