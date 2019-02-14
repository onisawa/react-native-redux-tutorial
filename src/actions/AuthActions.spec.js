import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/auth';

import { selectLibrary, emailChanged, passwordChanged, loginUser } from './AuthActions';
import {
  SELECT_LIBRARY,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';
import { Actions } from 'react-native-router-flux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const text = 'hello';
const password = '1234';
const user1 = {
  email: text,
  password
};
const user2 = {
  email: 'text',
  password: 'password'
};
const user3 = {
  email: 'password',
  password: 'text'
};
const returnedUser = { name: 'user' };

describe('Auth Actions', () => {
  beforeEach(() => {
    store = mockStore();
  });

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
    it('login success', async () => {
      const spy = jest.spyOn(Actions, 'main');
      store.dispatch(loginUser(user1));

      await firebase;
      
      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: LOGIN_USER,
      });
      expect(actions).toContainEqual({
        type: LOGIN_USER_SUCCESS,
        payload: returnedUser
      });
      expect(spy).toBeCalled();
    });

    it('login failed but can create', async () => {
      store.dispatch(loginUser(user2));

      await firebase;

      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: LOGIN_USER,
      });
    });

    it('login failed and cant create', async () => {
      store.dispatch(loginUser(user3));

      await firebase;

      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: LOGIN_USER,
      });
    });
  });
});
