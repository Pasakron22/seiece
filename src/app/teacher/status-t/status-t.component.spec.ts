import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTComponent } from './status-t.component';

describe('StatusTComponent', () => {
  let component: StatusTComponent;
  let fixture: ComponentFixture<StatusTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
