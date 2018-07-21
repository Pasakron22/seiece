import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChemicalComponent } from './show-chemical.component';

describe('ShowChemicalComponent', () => {
  let component: ShowChemicalComponent;
  let fixture: ComponentFixture<ShowChemicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChemicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
