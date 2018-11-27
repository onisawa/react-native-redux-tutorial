import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';

import reducers from './reducers';
// import { Header } from './components/common';
// import t from './constant/text.json';
// import LibraryList from './components/LibraryList';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBEb1nW40ct_YWqdZgJD-eGdOOwd2oQ6m4',
      authDomain: 'dev-big-lab.firebaseapp.com',
      databaseURL: 'https://dev-big-lab.firebaseio.com',
      projectId: 'dev-big-lab',
      storageBucket: 'dev-big-lab.appspot.com',
      messagingSenderId: '809693940871'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
