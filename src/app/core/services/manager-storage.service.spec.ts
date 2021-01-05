import { TestBed } from '@angular/core/testing';

import { ManagerStorageService } from './manager-storage.service';

describe('ManagerStorageService', () => {
  let service: ManagerStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
