import { TestBed, inject } from '@angular/core/testing';

import { SearchCandidateService } from './search-candidate.service';

describe('SearchCandidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCandidateService]
    });
  });

  it('should be created', inject([SearchCandidateService], (service: SearchCandidateService) => {
    expect(service).toBeTruthy();
  }));
});
