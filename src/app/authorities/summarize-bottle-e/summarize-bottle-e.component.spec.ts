import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeBottleEComponent } from './summarize-bottle-e.component';

describe('SummarizeBottleEComponent', () => {
  let component: SummarizeBottleEComponent;
  let fixture: ComponentFixture<SummarizeBottleEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeBottleEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeBottleEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
