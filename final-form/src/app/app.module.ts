import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormTableComponent } from './form-table/form-table.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
// import { InMemoryDataService, User } from "./listofusers";

@NgModule({
  declarations: [
    AppComponent,
    // InMemoryDataService,
    // User,
    FormTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
