import { Component } from '@angular/core';
import {TodoInput} from './common/todo-input';
import {TodoList} from './common/todo-list/todo-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TodoInput, TodoList],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'TODO LIST';
}
