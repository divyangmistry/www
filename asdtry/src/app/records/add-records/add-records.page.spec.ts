import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordsPage } from './add-records.page';

describe('AddRecordsPage', () => {
  let component: AddRecordsPage;
  let fixture: ComponentFixture<AddRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
