import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Map, fromJS} from 'immutable';

import {NgRedux, select} from 'ng2-redux';

import {combineReducers} from 'redux';

import {
  Connect,
  ConnectArray,
  FormStore,
  //NgReduxForms,
  //composeReducers,
  //defaultFormReducer,
} from 'ng2-redux-form';

import { IAppState, ISession, rootReducer } from '../../store';

@Component({
  selector: 'form-example',
  template: `
    <h3>Todos</h3>
    <form connect="todos">
      <input type="text" name="name" ngControl ngModel />
    </form>
    <button type="button" (click)="onAddItem()">Add</button>
    <ul>
      <li *ngFor="let item of (list | async); let index = index">
        {{item}}
        <button type="button" (click)="onRemoveItem(index)">Remove</button>
      </li>
    </ul>
  `
})
export class FormExample {
  @select(s => s.todos.get('list')) private list;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  private onAddItem() {
    this.ngRedux.dispatch({ type: 'ADD_TODO' });
  }

  private onRemoveItem(index: number) {
    if (index == null) {
      return;
    }
    this.ngRedux.dispatch({ type: 'REMOVE_TODO', payload: { index }});
  }
}
