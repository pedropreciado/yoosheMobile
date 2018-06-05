import React from 'react';
import {
  View,
  Text
} from 'react-native';

import PlaceShow from './place_show';

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false  
    }

    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    console.log('reached')
    let pressed = !this.state.pressed;
    
    this.setState({ pressed });
  }
  
  render() {
    let { 
      isOpen,
      name,
      busyPercentage,
      address
    } = this.props.place;
 

    return (
      <View style={{
        flex: this.state.pressed ? .2 : .1,
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: isOpen ? 'rgb(76, 217, 100)' : 'rgb(255, 59, 48)',
        height: 120,
        borderRadius: 5,
        minWidth: '90%',
      }}
      onPress={this._onPress}
      >
          <View style={{ 
            justifyContent: 'space-between',
            paddingLeft: 10
            }}>
              <Text 
              style={{ 
                fontSize: 40,
                color: 'white'
                }}>
              { name.length < 15 
                ? name
                : name.slice(0, 14) + '...'
              }
              </Text>
              
              <Text 
              style={{ 
                fontSize: 20,
                color: 'white'
                }}>
                { address }
              </Text>
              
              <Text 
              style={{ 
                fontSize: 30,
                color: 'white' 
              }}>
              
              { isOpen
              ? busyPercentage + '%' + ' busy'
              : 'Closed'
            }
              </Text>

              <View style={{
              flex: isOpen ? busyPercentage/100 : 1,
              backgroundColor: 'rgb(255, 255, 255)',
              opacity: .1,
              position: 'absolute',
              borderRightWidth: .5
            }}></View>
          </View>

      </View>
    )
  }
}

export default PlaceIndexItem;

