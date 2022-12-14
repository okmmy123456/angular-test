import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ComMainComponent } from './pur/com-main/com-main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Com1Component } from './pur/com1/com1.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Com2Component } from './pur/com2/com2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { PrlnService } from './shared/prln.service';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot([{ path: '', component: ComMainComponent }]),
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule


  ],
  declarations: [AppComponent, HelloComponent,ComMainComponent,Com1Component,Com2Component],
  bootstrap: [AppComponent],
  providers: [PrlnService]
})
export class AppModule {}
