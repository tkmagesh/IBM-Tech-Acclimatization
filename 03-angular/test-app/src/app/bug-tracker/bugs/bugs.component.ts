import { Component } from '@angular/core';
import Bug from '../models/Bug';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  bugs : Bug[] = [
    { id : 1, name : "Server communication failure", createdAt : new Date(), isClosed : false},
    { id: 2, name: "User access denied", createdAt: new Date(), isClosed: true },
    { id: 3, name: "Data integrity checks failed", createdAt: new Date(), isClosed: false },
  ]
  

  onNewBugCreated(newBug : Bug) {
    let newId = this.bugs.length + 1
    newBug.id = newId
    this.bugs.push(newBug)
  }

  onBugNameClick(bugToToggle : Bug) {
    bugToToggle.isClosed = !bugToToggle.isClosed
  }

  onBtnRemoveClick(bugToRemove : Bug) {
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }
}
