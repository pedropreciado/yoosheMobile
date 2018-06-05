import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  NativeRouter,
  Redirect,
  Switch,
  Link,
  Route
} from 'react-router-native';

import configureStore from './store/store';
import { AuthRoute, ProtectedRoute } from './utils/route_util';
import SessionFormContainer from './components/session/session_form_container';
import LandingContainer from './components/landing/landing_container';
import PlaceIndexContainer from './components/place/place_index_container';
import PlaceShow from './components/place/place_show';
import AppContainer from './app_container';

let store = configureStore();

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
      <View style={styles.container}>

            <NativeRouter>
              <Switch>
                <AuthRoute exact path='/' component={LandingContainer} />
                <AuthRoute path='/auth' component={SessionFormContainer} />
                <ProtectedRoute path='/places' component={AppContainer}/>
              </Switch>
            </NativeRouter>

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
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 40
  },
  text: {
    color: 'black'
  }
});

{/* <ProtectedRoute path='/places/:id' component={PlaceShow}/> */}