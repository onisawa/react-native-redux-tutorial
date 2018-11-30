import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeeUpdate, employeeEdit } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

import t from '../constant/text.json';
import { shiftDay } from '../constant/day';

class EmployeeEditPage extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeEdit({
      name,
      phone,
      shift: shift || shiftDay[0],
      uid: this.props.employee.uid
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            {t.save_btn}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeEdit }
)(EmployeeEditPage);
