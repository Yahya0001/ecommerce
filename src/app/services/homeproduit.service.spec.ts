import { TestBed } from '@angular/core/testing';

import { HomeproduitService } from './homeproduit.service';

describe('HomeproduitService', () => {
  let service: HomeproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
