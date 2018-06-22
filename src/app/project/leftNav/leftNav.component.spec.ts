/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { leftNavComponent } from './leftNav.component';

describe('HomeComponent', () => {
  let component: leftNavComponent;
  let fixture: ComponentFixture<leftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ leftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(leftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
