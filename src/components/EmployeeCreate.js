import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class EmployeeCreate extends Component {
  renderShiftPicker() {
    const shiftDay = [
      t.monday,
      t.tuesday,
      t.wednesday,
      t.thursday,
      t.friday,
      t.saturday,
      t.sunday,
    ];

    return shiftDay.map(day => <Picker.Item label={day} value={day} />);
  }

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
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {this.renderShiftPicker()}
          </Picker>
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
