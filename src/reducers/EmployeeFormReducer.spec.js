import reducer from './EmployeeFormReducer';
import { EMPLOYEE_UPDATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_RESET_FORM } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

describe('Auth Reducer', () => {
  it('return inital state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('both undefined', () => {
    expect(reducer(undefined, undefined)).toEqual(INITIAL_STATE);
  });

  it('handle update employee', () => {
    expect(reducer(INITIAL_STATE, { type: EMPLOYEE_UPDATE, payload: { prop: 'name', value: 'big' } })).toEqual({ ...INITIAL_STATE, name: 'big' });
  });

  it('handle save employee success', () => {
    expect(reducer(INITIAL_STATE, { type: EMPLOYEE_SAVE_SUCCESS })).toEqual(INITIAL_STATE);
  });

  it('handle employee reset form', () => {
    expect(reducer(INITIAL_STATE, { type: EMPLOYEE_RESET_FORM })).toEqual(INITIAL_STATE);
  });

  it('return same state if type not match', () => {
    expect(reducer({}, {})).toEqual({});
  });
});
