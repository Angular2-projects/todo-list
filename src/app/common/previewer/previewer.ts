import {Component} from '@angular/core';

@Component({
  selector: 'previewer',
  templateUrl: 'app/common/previewer/previewer.html'
})

export class Previewer {
  uploadFile() {
    console.log('upload file');
  }
}
