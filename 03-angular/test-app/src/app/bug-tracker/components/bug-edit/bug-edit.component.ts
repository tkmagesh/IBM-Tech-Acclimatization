import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http : HttpClient){

  }
  
  onBtnAddNewClick() {
    let newBugData: Bug = {
      id: 0,
      name: this.newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.http
      .post<Bug>('http://localhost:3030/bugs', newBugData)
      .subscribe(newBug => this.bugAdded.emit(newBug))
    
  }
}
