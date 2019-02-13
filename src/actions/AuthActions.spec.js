import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { selectLibrary } from './AuthActions';
import { SELECT_LIBRARY } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Auth Actions', () => {
  it('select library', () => {
    const store = mockStore();
    store.dispatch(selectLibrary(1));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: SELECT_LIBRARY,
      payload: 1,
    });
  });
});
