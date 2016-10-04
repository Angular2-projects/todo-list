import {Component} from '@angular/core';
import {TodoService} from './service/todo-service';

@Component({
  selector: 'todo-input',
  templateUrl: 'app/common/todo-input.html'
})

export class TodoInput {
  label: string;

  constructor(public todoService: TodoService) {
    this.label = 'Introduce value';
  }

  onClick($event: any, value: any) {
    this.todoService.addItem(value);
    console.log(this.todoService);
  }
}
