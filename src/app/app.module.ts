
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'', component: TemperatureConverterComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
