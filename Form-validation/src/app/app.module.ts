import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
// import { user } from "./user";
// import { MatCard } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
    // MatCard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
