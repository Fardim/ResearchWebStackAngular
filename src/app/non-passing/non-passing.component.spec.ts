import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPassingComponent } from './non-passing.component';

describe('NonPassingComponent', () => {
  let component: NonPassingComponent;
  let fixture: ComponentFixture<NonPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
