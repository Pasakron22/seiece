import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeReservationEComponent } from './summarize-reservation-e.component';

describe('SummarizeReservationEComponent', () => {
  let component: SummarizeReservationEComponent;
  let fixture: ComponentFixture<SummarizeReservationEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeReservationEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeReservationEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
