import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';

import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
