import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbeginner1Component } from './formbeginner1.component';

describe('Formbeginner1Component', () => {
  let component: Formbeginner1Component;
  let fixture: ComponentFixture<Formbeginner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formbeginner1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formbeginner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
