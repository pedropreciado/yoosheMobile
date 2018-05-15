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
    return (
      <View style={{
          paddingVertical: 5,
          backgroundColor: 'grey',
          marginTop: 5,
          height: 100,
        }}>
          <Text style={{
              fontSize: 40,
            }}>
            {
              this.props.place.name
            }
          </Text>
          <Text style={{ fontSize: 20 }}>
            {
              this.props.place.address
            }
          </Text>
        </View>
    )
  }
}

export default PlaceIndexItem;
