import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedTestComponent } from './passed-test.component';

describe('PassedTestComponent', () => {
  let component: PassedTestComponent;
  let fixture: ComponentFixture<PassedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
