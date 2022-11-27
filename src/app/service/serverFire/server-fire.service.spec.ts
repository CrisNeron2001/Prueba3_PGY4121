import { TestBed } from '@angular/core/testing';

import { ServerFireService } from './server-fire.service';

describe('ServerFireService', () => {
  let service: ServerFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
