import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTComponent } from './confirm-t.component';

describe('ConfirmTComponent', () => {
  let component: ConfirmTComponent;
  let fixture: ComponentFixture<ConfirmTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
