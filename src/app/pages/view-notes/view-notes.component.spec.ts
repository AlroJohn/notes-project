import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotesComponent } from './view-notes.component';

describe('ViewNotesComponent', () => {
  let component: ViewNotesComponent;
  let fixture: ComponentFixture<ViewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
