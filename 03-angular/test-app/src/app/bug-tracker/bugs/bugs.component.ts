import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Bug from '../models/Bug';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs : Bug[] = []

  constructor(private http : HttpClient){

  }

  ngOnInit(): void {
    this.http
      .get<Bug[]>('http://localhost:3030/bugs')
      .subscribe(bugs => this.bugs = bugs)
  }


  onNewBugCreated(newBug : Bug) {
    this.bugs.push(newBug)
  }

  onBugNameClick(bugToToggle : Bug) {
    bugToToggle.isClosed = !bugToToggle.isClosed
    this.http
      .put<Bug>(`http://localhost:3030/bugs/${bugToToggle.id}`, bugToToggle)
      .subscribe(toggledBug => console.log(toggledBug))
  }

  onBtnRemoveClick(bugToRemove : Bug) {
     this.http
      .delete(`http://localhost:3030/bugs/${bugToRemove.id}`)
      .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id))
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }
}
