import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { AppInputComponent } from './components/app-input/app-input.component';
import { AppMainCardComponent } from './components/app-main-card/app-main-card.component';
import { AppDatepickerComponent } from './components/app-datepicker/app-datepicker.component';
import { AppCardOutputInfoComponent } from './components/app-card-output-info/app-card-output-info.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

import { CustomCurrencyMaskConfig } from './utils/currency';

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
    MaterialModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
