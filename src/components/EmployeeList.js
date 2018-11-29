import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import _ from 'lodash';

import { employeeFetch } from '../actions';
import ListEmployeeItem from './ListEmployeeItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  renderItem({ item }) {
    return <ListEmployeeItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(employee) => employee.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => (
    { ...val, uid }
  ));

  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
