import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import t from '../constant/text.json';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    const { email } = this.props;

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
  email: state.auth.email
});

export default connect(mapStateToProps, { emailChanged })(LoginForm);
