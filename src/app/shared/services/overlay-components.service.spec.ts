import { TestBed } from '@angular/core/testing';

import { OverlayComponentsService } from './overlay-components.service';

describe('OverlayComponentsService', () => {
  let service: OverlayComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
