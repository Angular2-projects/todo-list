import {Injectable} from '@angular/core';
@Injectable()
export class TodoService {
  private _todos: Array<string>;

  constructor() {
    this._todos = new Array();
  }

  getItems():Array<string> {
    return this._todos;
  }

  addItem(item:string) {
    if (item !== undefined || item !== null || item !== '') {
      this._todos.push(item);
    }
  }

  removeItem(index:number):boolean {
    if (index > -1 && index < this._todos.length) {
      this._todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
