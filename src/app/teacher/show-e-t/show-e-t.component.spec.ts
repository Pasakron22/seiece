import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowETComponent } from './show-e-t.component';

describe('ShowETComponent', () => {
  let component: ShowETComponent;
  let fixture: ComponentFixture<ShowETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
