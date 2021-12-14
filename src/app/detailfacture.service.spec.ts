import { TestBed } from '@angular/core/testing';

import { DetailfactureService } from './detailfacture.service';

describe('DetailfactureService', () => {
  let service: DetailfactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailfactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
