import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { BugsComponent } from './bug-tracker/bugs/bugs.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
