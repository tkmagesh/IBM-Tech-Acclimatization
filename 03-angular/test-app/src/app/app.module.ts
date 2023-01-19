import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { BugsComponent } from './bug-tracker/bugs/bugs.component';
import { ClosedCountPipe } from './bug-tracker/pipes/closed-count.pipe';
import { BugStatsComponent } from './bug-tracker/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit/bug-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
