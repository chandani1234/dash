import { TestBed } from '@angular/core/testing';

import { Sharedservice3Service } from './sharedservice3.service';

describe('Sharedservice3Service', () => {
  let service: Sharedservice3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedservice3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
