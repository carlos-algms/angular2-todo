import {Injectable} from 'angular2/core';
import {Todo} from './todo';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    new Todo(1, 'Testar 1'),
    new Todo(2, 'Testar 2'),
    new Todo(3, 'Testar 3'),
    new Todo(4, 'Testar 4'),
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
