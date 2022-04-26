import { TestBed } from '@angular/core/testing';

import { NgValidatorService } from './ng-validator.service';

describe('NgValidatorService', () => {
  let service: NgValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
