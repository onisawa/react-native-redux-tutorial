import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

import { employeeUpdate, resetForm, employeeCreate } from './EmployeeActions';
import { EMPLOYEE_UPDATE, EMPLOYEE_RESET_FORM, EMPLOYEE_SAVE_SUCCESS } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const employee = { prop: 'prop', value: 'value' };
const newEmployee = { name: 'name', phone: '555', shift: 0 };

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

  it('reset form', () => {
    store.dispatch(resetForm());

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_RESET_FORM,
    });
  });

  it('create employee', async () => {
    store.dispatch(employeeCreate(newEmployee));

    await firebase;

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_SAVE_SUCCESS,
    });
  });
});
