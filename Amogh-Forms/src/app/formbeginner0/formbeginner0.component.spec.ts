import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbeginner0Component } from './formbeginner0.component';

describe('Formbeginner0Component', () => {
  let component: Formbeginner0Component;
  let fixture: ComponentFixture<Formbeginner0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formbeginner0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formbeginner0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
