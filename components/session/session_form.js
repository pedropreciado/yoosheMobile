import React from 'react';
import { View, Text, Button } from 'react-native';

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
              alignItems: 'baseline',
              justifyContent: 'space-around',
              backgroundColor: 'grey',
              paddingLeft: 120
            }}>

          <Text style={{
              fontSize: 50,
              textAlign: 'center'
            }}>
            yooshe
          </Text>

          <Button
            title='signup'
            style={{ backgroundColor: 'magenta' }}
            onPress={() => this.setState({
              formType: this.state.formType === 'login'
                        ? 'signup'
                        : 'login'
            })}
            />

        </View>
      <LoginForm
      login={this.props.login}
      />
      </View>
    )
  }
}

export default SessionForm;
