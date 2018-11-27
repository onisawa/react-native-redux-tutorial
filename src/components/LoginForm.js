import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label={t.email}
            placeholder="email@domain.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            isSecure
            label={t.password}
            placeholder="******"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
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

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
