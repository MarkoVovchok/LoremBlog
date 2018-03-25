import { TestBed, inject } from '@angular/core/testing';

import { FakeInfoService } from './fake-info.service';

describe('FakeInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeInfoService]
    });
  });

  it('should be created', inject([FakeInfoService], (service: FakeInfoService) => {
    expect(service).toBeTruthy();
  }));
});
