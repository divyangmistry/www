import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillPagePage } from './refill-page.page';

describe('RefillPagePage', () => {
  let component: RefillPagePage;
  let fixture: ComponentFixture<RefillPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
