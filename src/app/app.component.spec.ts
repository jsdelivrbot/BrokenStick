
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('1st tests', () => {
	it('true is true', () => expect(true).toBe(true));
});

// describe('Open Application', function() {
// 	beforeEach(function(){
// 		browser.get('http://localhost:4200/home');
// 		ptor = protractor.getInstance(); 
// 	});
// 	it('Click on Recipes link', function() {
// 		element(by.xpath('//a[contains(text(), "Recipe")]')).click(),
// 		expect (element(by.xpath('//h1')).getText()).toEqual('Master Grid')
// 	});

// });

