import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineCheckboxComponent } from './multiline-checkbox.component';

describe('MultilineCheckboxComponent', () => {
  let component: MultilineCheckboxComponent;
  let fixture: ComponentFixture<MultilineCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilineCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilineCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
