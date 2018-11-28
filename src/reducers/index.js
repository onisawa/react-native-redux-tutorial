import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer, 
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
