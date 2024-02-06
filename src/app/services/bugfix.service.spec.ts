import { TestBed } from '@angular/core/testing';

import { BugfixService } from './bugfix.service';

describe('BugfixService', () => {
  let service: BugfixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugfixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
