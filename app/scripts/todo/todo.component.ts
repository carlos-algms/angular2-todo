import {Component, OnInit, View} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodoFormComponent} from './todo-form.component';

@Component({
  selector: 'todo-list',
  providers: [TodoService]
})

@View({
  template: `
    <todo-form></todo-form>
    <ul class="collection">
      <li class="collection-item" *ngFor="#item of todos">
        <div>
          {{ item.text }}
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
    </ul>
  `,
  directives: [TodoFormComponent]
})

export class TodoComponent implements OnInit {
  public todos: Todo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getAll();
  }

}
