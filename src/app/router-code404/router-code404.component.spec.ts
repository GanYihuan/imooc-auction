import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCode404Component } from './router-code404.component';

describe('RouterCode404Component', () => {
  let component: RouterCode404Component;
  let fixture: ComponentFixture<RouterCode404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterCode404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCode404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
