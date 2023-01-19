import { Component, OnInit } from '@angular/core';

import Bug from '../models/Bug';
import { BugApiService } from '../services/bugApiService';
import { BugsService } from '../services/bugService';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs : Bug[] = []

  constructor(
    private bugsService : BugsService,
    private bugApi : BugApiService

    ){

  }

  ngOnInit(): void {
    this.bugApi
      .GetAll()
      .subscribe(bugs => this.bugs = bugs)
  }


  onNewBugCreated(newBug : Bug) {
    this.bugs.push(newBug)
  }

  onBugNameClick(bugToToggle : Bug) {
    bugToToggle.isClosed = !bugToToggle.isClosed
    this.bugApi.Save(bugToToggle)
      .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug))
  }

  onBtnRemoveClick(bugToRemove : Bug) {
     this.bugApi
      .Remove(bugToRemove)
      .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id))
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }
}
