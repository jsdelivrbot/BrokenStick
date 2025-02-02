/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserReportComponent } from './user-report.component';

describe('UserReportComponent', () => {
  let component: UserReportComponent;
  let fixture: ComponentFixture<UserReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
