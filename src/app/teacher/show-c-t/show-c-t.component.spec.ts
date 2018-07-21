import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCTComponent } from './show-c-t.component';

describe('ShowCTComponent', () => {
  let component: ShowCTComponent;
  let fixture: ComponentFixture<ShowCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
