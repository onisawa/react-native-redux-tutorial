import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  NativeModules,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import color from '../constant/color.json'
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    const { UIManager } = NativeModules;
    UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true)

    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.library
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    color: color.text
  }
};

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedLibraryId === ownProps.library.id
});

export default connect(mapStateToProps, actions)(ListItem);
