import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthoritiesComponent } from './index-authorities.component';

describe('IndexAuthoritiesComponent', () => {
  let component: IndexAuthoritiesComponent;
  let fixture: ComponentFixture<IndexAuthoritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAuthoritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
