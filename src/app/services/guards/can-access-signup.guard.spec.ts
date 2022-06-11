import { TestBed } from '@angular/core/testing';

import { CanAccessSignupGuard } from './can-access-signup.guard';

describe('CanAccessSignupGuard', () => {
  let guard: CanAccessSignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessSignupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
