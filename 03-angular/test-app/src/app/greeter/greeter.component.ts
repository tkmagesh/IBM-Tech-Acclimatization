import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {
  
  greetMsg = ""
  userName = ""

  onBtnGreetClick(){
    this.greetMsg = `Hi ${this.userName}, Have a nice day!`
  }
  onTxtUserNameChange(evt:any) {
    this.userName = evt.target.value
  }
}
