import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NumberGame } from './numbergame.component'
import {NumberGameService } from './numbergameservice.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumberGame
  ],
  imports: [
    BrowserModule,
    FormsModule
//    AppRoutingModule
  ],
  providers: [NumberGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
