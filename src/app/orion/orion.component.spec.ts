import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrionComponent } from './orion.component';

describe('OrionComponent', () => {
  let component: OrionComponent;
  let fixture: ComponentFixture<OrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
