import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOrderPagePage } from './review-order-page.page';

describe('ReviewOrderPagePage', () => {
  let component: ReviewOrderPagePage;
  let fixture: ComponentFixture<ReviewOrderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewOrderPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOrderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
