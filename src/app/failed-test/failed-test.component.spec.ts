import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedTestComponent } from './failed-test.component';

describe('FailedTestComponent', () => {
  let component: FailedTestComponent;
  let fixture: ComponentFixture<FailedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
