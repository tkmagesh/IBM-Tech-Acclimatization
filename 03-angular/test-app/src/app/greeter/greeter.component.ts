import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {
  
  greetMsg : string = "";
  userName : string = "";

  onBtnGreetClick(){
    this.greetMsg = `Hi ${this.userName}, Have a nice day!`
    // this.greetMsg = 1000
  }
  onTxtUserNameChange(evt:any) {
    this.userName = evt.target.value
  }
}
