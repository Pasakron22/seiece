import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCComponent } from './confirm-c.component';

describe('ConfirmCComponent', () => {
  let component: ConfirmCComponent;
  let fixture: ComponentFixture<ConfirmCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
