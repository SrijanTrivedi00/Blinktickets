import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporeeventsComponent } from './exporeevents.component';

describe('ExporeeventsComponent', () => {
  let component: ExporeeventsComponent;
  let fixture: ComponentFixture<ExporeeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExporeeventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExporeeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
