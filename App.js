import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import configureStore from './store/store';
import SessionFormContainer from './components/session/session_form_container';

let store = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
          <SessionFormContainer />
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  text: {
    color: 'black'
  }
});
