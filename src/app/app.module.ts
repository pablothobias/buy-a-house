import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppMainCardComponent } from './components/app-main-card/app-main-card.component';
import { AppDatepickerComponent } from './components/app-datepicker/app-datepicker.component';
import { AppCardOutputInfoComponent } from './components/app-card-output-info/app-card-output-info.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInputComponent,
    AppMainCardComponent,
    AppDatepickerComponent,
    AppCardOutputInfoComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
