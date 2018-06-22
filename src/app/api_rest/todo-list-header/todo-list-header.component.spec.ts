/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodoListHeaderComponent } from './todo-list-header.component';
import { Todo } from '../todo';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;
  let newTodo: Todo; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test Header todo', () => {

    //component.newTodo.subscribe((value) => newTodo = value); 
    expect(newTodo.id).toBe("3");
    expect(newTodo.title).toBe("Make restaurant reservation");
  })
});
