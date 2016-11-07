import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import * as counter from './counter';
import * as session from './session';

import {
  composeReducers,
  defaultFormReducer
} from 'ng2-redux-form';

import {Map, fromJS} from 'immutable';

function todoReducer(state = todos, action: {type: string, payload?}) {
  switch (action.type) {
    case 'ADD_TODO':
      const name = state.get('name').trim();
      if (name) {
        return state.merge({
          list: state.get('list').concat([name]),
          name: ''
        });
      }
      break;
    case 'REMOVE_TODO':
      return state.deleteIn(['list', action.payload.index]);
  }
  return state;
}
const form1 = {
  textExample: 'Text example',
  checkboxExample: true,
  arrayExample: [
    {
      numberExample: 1,
      dropdownExample: 'one'
    },
    {
      numberExample: 2,
      dropdownExample: 'two'
    }
  ]
};

const todos = fromJS({ // immutablejs structure
  name: 'Get groceries!',
  list: [
    'Pick the kids up from school',
    'Do the laundry'
  ]
});

export interface IAppState {
  counter?: counter.ICounter;
  session?: session.ISession;
  todos?: Map<string, any>;
};

export const rootReducer = composeReducers(
  combineReducers<IAppState>({
    counter: counter.counterReducer,
    session: session.sessionReducer,
    router: routerReducer,
    todos: todoReducer
  }),
  defaultFormReducer());

export function deimmutify(store) {
  return {
    counter: store.counter.toJS(),
    session: store.session.toJS(),
    router: store.router,
  };
}

export function reimmutify(plain) {
  return {
    counter: counter.CounterFactory(plain.counter),
    session: session.SessionFactory(plain.session),
    router: plain.router,
  };
}
