import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'
import { Header } from './components/common'
import t from './constant/text.json'


const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Header headerText={t.app_header} />
    </View>
  </Provider>
);

export default App;
