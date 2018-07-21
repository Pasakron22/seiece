import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTeacherComponent } from './bar-teacher.component';

describe('BarTeacherComponent', () => {
  let component: BarTeacherComponent;
  let fixture: ComponentFixture<BarTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
