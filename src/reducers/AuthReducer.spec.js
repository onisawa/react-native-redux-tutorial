import reducer from './AuthReducer';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  user: null
};

describe('Auth Reducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('handle email changed', () => {
    expect(reducer(INITIAL_STATE, { type: EMAIL_CHANGED, payload: 'email' })).toEqual({ ...INITIAL_STATE, email: 'email' });
  });

  it('handle password changed', () => {
    expect(reducer(INITIAL_STATE, { type: PASSWORD_CHANGED, payload: 'password' })).toEqual({ ...INITIAL_STATE, password: 'password' });
  });

  it('handle login success', () => {
    expect(reducer(INITIAL_STATE, { type: LOGIN_USER_SUCCESS, payload: 'user' })).toEqual({ ...INITIAL_STATE, user: 'user' });
  });

  it('handle login fail', () => {
    expect(reducer(INITIAL_STATE, { type: LOGIN_USER_FAIL })).toEqual({ ...INITIAL_STATE, error: 'Authorization Failed.', password: '', isLoading: false });
  });

  it('handle loging in', () => {
    expect(reducer(INITIAL_STATE, { type: LOGIN_USER })).toEqual({ ...INITIAL_STATE, isLoading: true });
  });

  it('return same state if type not match', () => {
    expect(reducer({}, {})).toEqual({});
  });
});
