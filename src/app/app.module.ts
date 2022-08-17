import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PurPrListAssignCom2Component } from './pur/pur-pr-list-assign/pur-pr-list-assign-com2/pur-pr-list-assign-com2.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,PurPrListAssignCom2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
