import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NgReduxForms,
} from 'ng2-redux-form';
import {
  FormExample
} from './index';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxForms,
  ],
  declarations: [
    FormExample
  ],
  exports: [
    FormExample
  ],
  // providers: [
  //   NgRedux,
  // ],
})
export class FormExampleModule { }
