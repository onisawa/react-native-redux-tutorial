import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

import { employeeUpdate, resetForm, employeeCreate, employeeFetch, employeeEdit, employeeDelete } from './EmployeeActions';
import { EMPLOYEE_UPDATE, EMPLOYEE_RESET_FORM, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_FETCH_SUCCESS } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const form = { prop: 'prop', value: 'value' };
const newEmployee = { name: 'name', phone: '555', shift: 0 };
const createdEmployee = { name: 'name', phone: '555', shift: 0, uid: 'abc' };
const unwantedEmployee = { uid: 'noob' };

describe('Employee Actions', () => {
  beforeEach(() => {
    store = mockStore();
  });

  it('employee update', () => {
    store.dispatch(employeeUpdate(form));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_UPDATE,
      payload: form,
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

  it('fetch employee', async () => {
    store.dispatch(employeeFetch());

    await firebase;

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_FETCH_SUCCESS,
      payload: 'value'
    });
  });

  it('edit employee', async () => {
    store.dispatch(employeeEdit(createdEmployee));

    await firebase;

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_SAVE_SUCCESS,
    });
  });

  it('remove employee', async () => {
    store.dispatch(employeeDelete(unwantedEmployee));

    await firebase;

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: EMPLOYEE_SAVE_SUCCESS,
    });
  });
});
