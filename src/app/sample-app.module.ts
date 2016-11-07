import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  DevToolsExtension,
  NgRedux
} from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';
import {
  routing,
  appRoutingProviders
} from './sample-app.routing';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {RioSampleApp} from './sample-app';
import {SessionActions} from '../actions/session.actions';
import {SessionEpics} from '../epics/session.epics';
import {
  RioAboutPage,
  RioCounterPage
} from '../pages';
import {RioCounter} from '../components/counter/counter.component';
import {RioLoginModule} from '../components/login/login.module';
import {RioUiModule} from '../components/ui/ui.module';
import {RioNavigatorModule} from '../components/navigator/navigator.module';
import {FormExampleModule} from '../components/formtest/formtest.module';

import {
  NgReduxForms,
} from 'ng2-redux-form';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    NgReduxForms,
    RioLoginModule,
    RioUiModule,
    RioNavigatorModule,
    FormExampleModule
  ],
  declarations: [
    RioSampleApp,
    RioAboutPage,
    RioCounterPage,
    RioCounter
  ],
  bootstrap: [
    RioSampleApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders,
    SessionActions,
    SessionEpics
  ]
})
export class RioSampleAppModule { }
