import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={t.employee_name}
            placeholder="Big"
          />
        </CardSection>

        <CardSection>
          <Input
            label={t.employee_phone}
            placeholder="555-555-5555"
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

export default EmployeeCreate;
