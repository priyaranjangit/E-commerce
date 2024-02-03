import { TestBed } from '@angular/core/testing';

import { RozService } from './roz.service';

describe('RozService', () => {
  let service: RozService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RozService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
