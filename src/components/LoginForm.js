import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={t.email}
            placeholder="email@domain.com"
          />
        </CardSection>

        <CardSection>
          <Input
            isSecure
            label={t.password}
            placeholder="******"
          />
        </CardSection>

        <CardSection>
          <Button>
            {t.login}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
