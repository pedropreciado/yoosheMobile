import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity } from 'react-native';

import LoginForm from './login_form';

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
              // alignItems: 'baseline',
              justifyContent: 'space-around',
              paddingLeft: 120,
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
              borderLeftWidth: .5,
              borderColor: 'rgba(31, 31, 31, .4)',
             }}
            onPress={() => this.setState({
              formType: this.state.formType === 'login'
                        ? 'signup'
                        : 'login'
            })}
            >
          <Text
            style={{
              fontSize: 15,
            }}
            >
              { this.state.formType === 'login'
                ? 'signup'
                : 'login'
              }
          </Text>
        </TouchableOpacity>
      </View>
      <LoginForm
      login={this.props.login}
      />
      </View>
    )
  }
}

export default SessionForm;
