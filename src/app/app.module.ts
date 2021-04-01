import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './Day1/hello.component';
import { NgIfComponent } from './Day2/ngIf.component';
import { NgForComponent } from './Day2/ngFor.component';
import { AttDirectiveComponent } from './Day2/attDirective.component';
import { ProgressBarComponent } from './Day2/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NgIfComponent,
    NgForComponent,
    AttDirectiveComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
