import React from 'react';
import { View, Text  } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConf: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
      passwordConf: value
    });
  }

  handleSubmit() {
    this.props.signup(this.state);
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
                  this.handleChange('email', text.toLowerCase())
                }/>
            </View>



            <View style={{
                paddingBottom: 20,
                backgroundColor: 'transparent'
              }}>
                <FormInput
                  placeholder='username'
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
                  this.handleChange('username', text.toLowerCase())
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
                  this.handleChange('password', text)
                }}
              />
              </View>
        </View>

        <Button
        large
        title='signup'
        backgroundColor='rgba(255, 255, 255, .6)'
        fontSize={30}
        fontWeight='100'
        color='black'
        onPress={() => this.handleSubmit()}
        />
      </View>
    )
  }
}

export default SignupForm;
