import { TestBed } from '@angular/core/testing';

import { MusicServiceService } from './music-service.service';

describe('MusicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicServiceService = TestBed.get(MusicServiceService);
    expect(service).toBeTruthy();
  });
});




/*import { TestBed } from '@angular/core/testing';

import { MusicServiceService } from './music-service.service';

describe('MusicServiceService', () => {
  let service: MusicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); */
