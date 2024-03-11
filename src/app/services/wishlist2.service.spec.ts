import { TestBed } from '@angular/core/testing';

import { Wishlist2Service } from './wishlist2.service';

describe('Wishlist2Service', () => {
  let service: Wishlist2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wishlist2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
