import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formbeginner1Component } from './formbeginner1/formbeginner1.component';
import { Formbeginner0Component } from './formbeginner0/formbeginner0.component'

@NgModule({
  declarations: [
    AppComponent,
    Formbeginner1Component,
    Formbeginner0Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
