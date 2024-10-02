import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { avionGuard } from './avion.guard';

describe('avionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => avionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
