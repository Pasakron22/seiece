import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeUserOfEComponent } from './summarize-user-of-e.component';

describe('SummarizeUserOfEComponent', () => {
  let component: SummarizeUserOfEComponent;
  let fixture: ComponentFixture<SummarizeUserOfEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeUserOfEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeUserOfEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
