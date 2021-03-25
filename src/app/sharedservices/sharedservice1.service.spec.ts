import { TestBed } from '@angular/core/testing';

import { Sharedservice1Service } from './sharedservice1.service';

describe('Sharedservice1Service', () => {
  let service: Sharedservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
