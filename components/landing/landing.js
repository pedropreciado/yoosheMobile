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
    if (this.props.currentUser) {
      this.props.history.push('/places')
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
    return (
      <View>
        <Text>
          yooshe
        </Text>
      </View>
    )
  }
}

export default Landing;
