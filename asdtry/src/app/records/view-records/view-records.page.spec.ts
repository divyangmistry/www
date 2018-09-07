import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordsPage } from './view-records.page';

describe('ViewRecordsPage', () => {
  let component: ViewRecordsPage;
  let fixture: ComponentFixture<ViewRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
