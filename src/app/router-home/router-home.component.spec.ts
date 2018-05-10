import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterHomeComponent } from './router-home.component';

describe('RouterHomeComponent', () => {
  let component: RouterHomeComponent;
  let fixture: ComponentFixture<RouterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
