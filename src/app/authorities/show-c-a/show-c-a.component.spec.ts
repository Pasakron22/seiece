import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCAComponent } from './show-c-a.component';

describe('ShowCAComponent', () => {
  let component: ShowCAComponent;
  let fixture: ComponentFixture<ShowCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
