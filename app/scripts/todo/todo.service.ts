import {Injectable} from 'angular2/core';
import {Todo} from './todo';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    new Todo(1, 'Test 1'),
    new Todo(2, 'Test 2'),
    new Todo(3, 'Test 3'),
    new Todo(4, 'Test 4'),
  ];


  public getAll() : Todo[] {
    return this.todos;
  }

  //TODO save localStorage
  public add(todo: Todo) : Todo {
    this.todos.push(todo);
    todo.id = this.todos.length;
    return todo;
  }
}
