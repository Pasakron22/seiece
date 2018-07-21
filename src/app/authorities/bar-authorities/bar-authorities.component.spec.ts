import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAuthoritiesComponent } from './bar-authorities.component';

describe('BarAuthoritiesComponent', () => {
  let component: BarAuthoritiesComponent;
  let fixture: ComponentFixture<BarAuthoritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarAuthoritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
