import { TestBed } from '@angular/core/testing';

import { CommandLineService } from './command-line.service';

describe('CommandLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandLineService = TestBed.get(CommandLineService);
    expect(service).toBeTruthy();
  });
});
