import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class EmployeeCreate extends Component {
  render() {
    const { name, phone } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label={t.employee_name}
            placeholder="Big"
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label={t.employee_phone}
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
