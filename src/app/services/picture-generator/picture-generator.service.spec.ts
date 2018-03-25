import { TestBed, inject } from '@angular/core/testing';

import { PictureGeneratorService } from './picture-generator.service';

describe('PictureGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureGeneratorService]
    });
  });

  it('should be created', inject([PictureGeneratorService], (service: PictureGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
