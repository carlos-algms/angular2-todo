import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS}    from 'angular2/http';
import 'rxjs/add/operator/map';
import {TodoComponent} from './todo/todo.component';

bootstrap(TodoComponent, [HTTP_PROVIDERS]);
