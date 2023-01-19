import { Component, EventEmitter, Output } from '@angular/core';
import Bug from '../../models/Bug';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent {
  newBugName: string = "";

  @Output()
  bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>()
  
  onBtnAddNewClick() {
    let newBug: Bug = {
      id: 0,
      name: this.newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.bugAdded.emit(newBug)
  }
}
