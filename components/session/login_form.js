import React from 'react';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, Text } from 'react-native';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginemail: '',
      loginpassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({ [key]: value })
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'space-between'
        }}>

      <View style={{
          flex: 1,
          marginTop: 50,
          height: 20,
          justifyContent: 'center',
          borderWidth: .5,
          height: 40
        }}>
        <View style={{ paddingBottom: 50 }}>
            <FormInput
              placeholder='email'
              onChangeText={ (text) =>
              this.handleChange('loginemail', text.toLowerCase())
            }/>
            </View>

            <View>
            <FormInput
              placeholder='password'
              secureTextEntry={true}
              onChangeText={ (text) => {
                this.handleChange('loginpassword', text)
              }}
            />
        </View>
      </View>

      <Button
      large
      title='login'
      onPress={() => this.handleSubmit()}
      />
      </View>
    )
  }
}

export default LoginForm;
