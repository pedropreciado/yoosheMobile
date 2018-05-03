// TODO: clean loggin after reaching from Asyn storage

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import SessionFormContainer from '../session/session_form_container';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: true,
      userFound: false
    }

    this.renderScreen = this.renderScreen.bind(this);
  }

  renderScreen() {
    this.props.history.push('/places')
    if (this.props.currentUser) {
      return (
        <Text>
        logging in
        </Text>
      )
    } else {
      return (
        <SessionFormContainer />
      )
    }
  }

  componentWillMount() {
    this.props.fetchLocalUser();

        if (this.props.currentUser) {
          this.setState({
            userFound: true,
            searching: false
           })
        } else {
          this.setState({
            userFound: false,
            searching: false
           })
        }
  }

  render() {
    if (this.state.searching) {
      return (
        <View>
          <Text>
            yooshe
          </Text>
        </View>
      )
    } else {
      return (
        <View>
        {
          this.renderScreen()
        }
        </View>
      )
    }
  }
}

export default Landing;
