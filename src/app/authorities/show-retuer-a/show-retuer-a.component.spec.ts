import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRetuerAComponent } from './show-retuer-a.component';

describe('ShowRetuerAComponent', () => {
  let component: ShowRetuerAComponent;
  let fixture: ComponentFixture<ShowRetuerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRetuerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRetuerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
