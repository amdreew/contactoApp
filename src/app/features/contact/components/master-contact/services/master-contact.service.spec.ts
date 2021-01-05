import { TestBed } from '@angular/core/testing';

import { MasterContactService } from './master-contact.service';

describe('MasterContactService', () => {
  let service: MasterContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
