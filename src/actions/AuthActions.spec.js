import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/auth';

import { selectLibrary, emailChanged, passwordChanged, loginUser } from './AuthActions';
import { SELECT_LIBRARY, EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const text = 'hello';
const password = '1234';

describe('Auth Actions', () => {
  it('select library', () => {
    store.dispatch(selectLibrary(1));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: SELECT_LIBRARY,
      payload: 1,
    });
  });

  it('change email', () => {
    store.dispatch(emailChanged(text));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMAIL_CHANGED,
      payload: text,
    });
  });

  it('change password', () => {
    store.dispatch(passwordChanged(password));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: PASSWORD_CHANGED,
      payload: password,
    });
  });

  describe('user login', () => {
    it('login success', () => {
      store.dispatch(loginUser(text, password));
      
      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: LOGIN_USER,
      });
    });
  });
});
