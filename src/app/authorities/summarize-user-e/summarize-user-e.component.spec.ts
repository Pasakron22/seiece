import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeUserEComponent } from './summarize-user-e.component';

describe('SummarizeUserEComponent', () => {
  let component: SummarizeUserEComponent;
  let fixture: ComponentFixture<SummarizeUserEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeUserEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeUserEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
