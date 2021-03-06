import {Component, OnInit} from 'angular2/core';
import {NgForm, NgIf}    from 'angular2/common';

import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  template: `
    <div class="row">
      <form class="col s12" *ngIf="active" (ngSubmit)="onSubmit()">
        <div class="row">
          <div class="input-field col s9 m8">
            <input id="text" type="text" class="validate" [(ngModel)]="formModel.text" required />
            <label for="text">Description</label>
          </div>
          <div class="input-field col s3 m4">
            <button type="submit" class="waves-effect waves-light btn col s12">
              <i class="material-icons left">add</i>
              Insert
            </button>
          </div>
        </div>
      </form>
    </div>
  `
})

export class TodoFormComponent implements OnInit {
  public formModel;
  public active = true;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.formModel = new Todo(0, '');
  }

  onSubmit() {
    this.active = false;
    this._todoService.add(this.formModel);
    this.ngOnInit();

    setTimeout(()=> this.active = true, 0);
  }

}
