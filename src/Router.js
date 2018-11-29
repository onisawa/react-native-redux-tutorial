import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import t from './constant/text.json';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title={t.login_title} initial />
      </Scene>
      
      <Scene key="main">
        <Scene
          rightTitle={t.employee_list_right_title}
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title={t.employee_list_title}
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title={t.employee_create_title}
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
