import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import t from './constant/text.json';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title={t.login_title} initial />
      </Scene>
      
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title={t.employee_list_title} />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
