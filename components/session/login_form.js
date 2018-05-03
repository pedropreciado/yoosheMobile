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
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}>

      <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}>

        <View style={{
            paddingBottom: 20,
            backgroundColor: 'transparent'
          }}>
        <FormInput
          placeholder='email'
          placeholderTextColor='rgba(255, 255, 255, .4)'
          inputStyle={{
            color: 'white',
            fontSize: 30,
            paddingLeft: 20
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            paddingVertical: 10,
          }}
          onChangeText={(text) =>
          this.handleChange('loginemail', text.toLowerCase())
        }/>
        </View>

        <View>
        <FormInput
          placeholder='password'
          placeholderTextColor='rgba(255, 255, 255, .4)'
          secureTextEntry={true}
          inputStyle={{
            color: 'white',
            fontSize: 30
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            paddingVertical: 10,
            paddingLeft: 20,
          }}
          onChangeText={ (text) => {
            this.handleChange('loginpassword', text)
          }}
        />
        </View>
      </View>

      <Button
      large
      title='login'
      backgroundColor='rgba(255, 255, 255, .6)'
      fontSize='30'
      fontWeight='100'
      color='black'
      onPress={() => this.handleSubmit()}
      />
      </View>
    )
  }
}

export default LoginForm;
