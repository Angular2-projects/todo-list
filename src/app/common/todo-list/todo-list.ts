import {Component} from '@angular/core';
import {TodoService} from '../service/todo-service';




@Component({
  selector: 'todo-list',
  templateUrl: 'app/common/todo-list/todo-list.html'
})

export class TodoList {
  constructor(public todoService: TodoService) {}

  removeItem(index:number) {
    console.log('remove item: ' + index);
    this.todoService.removeItem(index);
  }
}
