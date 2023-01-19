import { Component } from '@angular/core';
import Bug from '../models/Bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  bugs : Bug[] = [
    {id : 1, name : "Server communication failure", createdAt : new Date(), isClosed : false},
    { id: 1, name: "User access denied", createdAt: new Date(), isClosed: true },
    { id: 1, name: "Data integrity checks failed", createdAt: new Date(), isClosed: false },
  ]
}
