import React from 'react';
import {
  View,
  Text
} from 'react-native';

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: isOpen ? 'rgb(76, 217, 100)' : 'rgb(255, 59, 48)',
        height: 150,
        borderRadius: 5,
        minWidth: '90%',

      }}>
          <View style={{ 
            flex: 1, 
            justifyContent: 'space-between',
            paddingLeft: 10
            }}>
              <Text 
              style={{ 
                fontSize: 40,
                color: 'white'
                }}>
              { name }
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
              { busyPercentage + '%' + ' full'}
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

