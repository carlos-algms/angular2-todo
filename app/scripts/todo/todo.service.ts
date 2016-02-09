import {Injectable} from 'angular2/core';
import {Todo} from './todo';
import {Storer} from '../utils/storer';

@Injectable()
export class TodoService {

  private storage: Storer<Todo[]> = new Storer<Todo[]>('todo-items');
  public todos: Todo[];

  constructor() {
    this.storage.read().subscribe(todos =>  {
      this.todos = todos || [];
    });
  }

  public add(todo: Todo) : Todo {
    this.todos.push(todo);
    todo.id = this.todos.length;
    this.storage.write(this.todos);
    return todo;
  }

  //TODO implement done / undone on items
}
