import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesDisplayComponent } from './attendees-display.component';

describe('AttendeesDisplayComponent', () => {
  let component: AttendeesDisplayComponent;
  let fixture: ComponentFixture<AttendeesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
