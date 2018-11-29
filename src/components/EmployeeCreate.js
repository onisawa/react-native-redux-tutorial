import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';
import c from '../constant/color.json';

const shiftDay = [
  t.monday,
  t.tuesday,
  t.wednesday,
  t.thursday,
  t.friday,
  t.saturday,
  t.sunday,
];

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log('press');

    this.props.employeeCreate({ name, phone, shift: shift || shiftDay[0] });
  }

  renderShiftPicker() {
    return shiftDay.map(day => <Picker.Item key={day} label={day} value={day} />);
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>{t.employee_shift}</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {this.renderShiftPicker()}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            {t.save_btn}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: c.text
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
