import {Component, View} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodoFormComponent} from './todo-form.component';

import {AnalyticsDirective} from '../analytics.directive';

@Component({
  selector: 'todo-list',
  providers: [TodoService],
})

@View({
  template: `
    <todo-form></todo-form>
    <ul class="collection" *ngIf="todoService.todos && todoService.todos.length > 0">
      <li class="collection-item" *ngFor="#item of todoService.todos">
        <div>
          {{ item.text }}
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
    </ul>
  `,
  directives: [TodoFormComponent, AnalyticsDirective]
})

export class TodoComponent {

  constructor(public todoService: TodoService) { }

}
