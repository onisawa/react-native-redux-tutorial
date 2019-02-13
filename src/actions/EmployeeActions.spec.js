import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { employeeUpdate } from './EmployeeActions';
import { EMPLOYEE_UPDATE } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const employee = { prop: 'prop', value: 'value' };

describe('Employee Actions', () => {
  beforeEach(() => {
    store = mockStore();
  });

  it('employee update', () => {
    store.dispatch(employeeUpdate(employee));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_UPDATE,
      payload: employee,
    });
  });
});
