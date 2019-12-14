import { TestBed } from '@angular/core/testing';

import { UnitTestResultService } from './unit-test-result.service';

describe('UnitTestResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitTestResultService = TestBed.get(UnitTestResultService);
    expect(service).toBeTruthy();
  });
});
