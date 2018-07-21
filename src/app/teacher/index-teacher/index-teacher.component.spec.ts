import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTeacherComponent } from './index-teacher.component';

describe('IndexTeacherComponent', () => {
  let component: IndexTeacherComponent;
  let fixture: ComponentFixture<IndexTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
