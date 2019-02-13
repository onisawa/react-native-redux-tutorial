import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { selectLibrary, emailChanged } from './AuthActions';
import { SELECT_LIBRARY, EMAIL_CHANGED } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore();

describe('Auth Actions', () => {
  it('select library', () => {
    store.dispatch(selectLibrary(1));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: SELECT_LIBRARY,
      payload: 1,
    });
  });

  it('email changed', () => {
    const text = 'email';
    store.dispatch(emailChanged(text));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMAIL_CHANGED,
      payload: text,
    });
  });
});
