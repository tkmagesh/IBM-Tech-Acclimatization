import { Component, EventEmitter, Output } from '@angular/core';
import Bug from '../../models/Bug';
import { BugApiService } from '../../services/bugApiService';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent {
  newBugName: string = "";

  @Output()
  bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>()

  constructor(private bugApi : BugApiService){

  }
  
  onBtnAddNewClick() {
    let newBugData: Bug = {
      id: 0,
      name: this.newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.bugApi
      .Save(newBugData)
      .subscribe(newBug => this.bugAdded.emit(newBug))
    
  }
}
