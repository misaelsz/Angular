import { TestBed, inject } from '@angular/core/testing';

import { FreteService } from './frete.service';

describe('FreteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreteService]
    });
  });

  it('should be created', inject([FreteService], (service: FreteService) => {
    expect(service).toBeTruthy();
  }));
});
