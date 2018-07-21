import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeTodayEComponent } from './summarize-today-e.component';

describe('SummarizeTodayEComponent', () => {
  let component: SummarizeTodayEComponent;
  let fixture: ComponentFixture<SummarizeTodayEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeTodayEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeTodayEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
