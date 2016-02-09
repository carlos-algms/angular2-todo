import {Injectable} from 'angular2/core';
import {Todo} from './todo';
import {Storer} from '../utils/storer';

@Injectable()
export class TodoService {

  private storage: Storer<Todo[]> = new Storer<Todo[]>('todo-items');
  private todos: Todo[];

  constructor() {
    this.storage.read().subscribe(todos =>  this.todos = todos || [] );

    //let subscriber: any = this.http.get('https://api.github.com/users/carlos-algms')
    //  .map( res => res.json() )
    //  .subscribe( res => console.log('talvez?', res) );

  }


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
