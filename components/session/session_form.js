import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity } from 'react-native';

import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: 'login'
    }
  }

  render() {
    return (
      <View>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingLeft: 100,
              paddingVertical: 20,
              backgroundColor: 'rgba(255, 255, 255, .6)',
            }}>

          <Text style={{
              fontSize: 50,
              textAlign: 'center',
              color: 'black',
              fontWeight: '100'
            }}>
            yooshe
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              borderLeftWidth: .5,
              borderColor: 'rgba(31, 31, 31, .4)',
             }}
            onPress={() => this.setState({
              formType: this.state.formType === 'login'
                        ? 'signup'
                        : 'login'
            })}
            >

            <Text>
              {
                this.props.currentUser
                ? this.props.currentUser.username
                : 'poop'
              }
            </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '100'
            }}
            >
              { this.state.formType === 'login'
                ? 'signup'
                : 'login'
              }
          </Text>
        </TouchableOpacity>
      </View>
      {
        this.state.formType === 'login'
        ? ( <LoginForm
          login={this.props.login}
          history={this.props.history}
           /> )
        : ( <SignupForm signup={this.props.signup} /> )
      }
      </View>
    )
  }
}

export default SessionForm;
