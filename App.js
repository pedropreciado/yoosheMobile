import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import {
  NativeRouter,
  Redirect,
  Switch,
  Link,
  Route
} from 'react-router-native';

import configureStore from './store/store';
import SessionFormContainer from './components/session/session_form_container';
import LandingContainer from './components/landing/landing_container';
import { AuthRoute, ProtectedRoute } from './utils/route_util';

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

            <NativeRouter>
              <Switch>
                <Route exact path='/' component={LandingContainer} />
                <AuthRoute path='/auth' component={SessionFormContainer} />
                <ProtectedRoute path='/places' component={() => (
                    <View><Text>poop</Text></View>
                  )} />
              </Switch>
            </NativeRouter>

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
