import { TestBed } from '@angular/core/testing';

import { NotesFunctionService } from './notes-function.service';

describe('NotesFunctionService', () => {
  let service: NotesFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
