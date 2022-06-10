import { TestBed } from '@angular/core/testing';

import { CanAcessAccountGuard } from './can-acess-account.guard';

describe('CanAcessAccountGuard', () => {
  let guard: CanAcessAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAcessAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
