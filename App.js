import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground } from 'react-native';

import configureStore from './store/store';
import SessionFormContainer from './components/session/session_form_container';

let store = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
          <ImageBackground
            source={require('./assets/images/pink.jpg')}
            style={styles.backgroundImage}
            >
          <SessionFormContainer />
          </ImageBackground>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  text: {
    color: 'black'
  }
});
