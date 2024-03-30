import { TestBed } from '@angular/core/testing';

import { SerchingService } from './serching.service';

describe('SerchingService', () => {
  let service: SerchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
