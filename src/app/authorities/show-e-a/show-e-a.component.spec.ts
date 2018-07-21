import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEAComponent } from './show-e-a.component';

describe('ShowEAComponent', () => {
  let component: ShowEAComponent;
  let fixture: ComponentFixture<ShowEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
