import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import t from './constant/text.json';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginForm} title={t.login_title} initial />
      <Scene key="employeeList" component={EmployeeList} title={t.employee_list_title} />
    </Scene>
  </Router>
);

export default RouterComponent;
