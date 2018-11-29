import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import t from '../constant/text.json';
import c from '../constant/color.json';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    
    this.props.loginUser({ email, password });
  }

  renderError() {
    const { error } = this.props;

    if (error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        {t.login}
      </Button>
    );
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
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: c.error_text,
    fontSize: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
