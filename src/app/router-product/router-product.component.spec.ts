import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProductComponent } from './router-product.component';

describe('RouterProductComponent', () => {
  let component: RouterProductComponent;
  let fixture: ComponentFixture<RouterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
