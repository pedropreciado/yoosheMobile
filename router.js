import { StackNavigator } from 'react-navigation';

import SessionFormContainer from './components/session/session_form_container';

export const SignedOut = StackNavigator({
  SessionForm: {
    screen: SessionFormContainer,
    navigationOptions: {
      title: 'auth'
    }
  }
});
