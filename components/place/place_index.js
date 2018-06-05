import React from 'react';
import {
  View,
  Text,
  FlatList
 } from 'react-native';
import PlaceIndexItem from './place_index_item';

class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true
    }
  }

  componentWillMount() {
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  render() {
    if (!Boolean(this.props.places.length)) {
      return (
        <Text>
          Loading ...
        </Text>
      )
    }
    return (
      <View>
        <View style={{
            backgroundColor: '#141515',
            height: 50,
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
          <Text style={{ 
            fontSize: 20, 
            color: 'white' 
            }}>
            place index
          </Text>
        </View>
          
          <FlatList 
          style={{
            backgroundColor: '#424242'
          }}
          contentContainerStyle={{

            width: '100%'
          }}
          data={this.props.places}
          renderItem={({ item, index }) => {
            return (<PlaceIndexItem place={item} key={index}/>)
          }}
          >
      </FlatList>
      </View>
    )
  }

}

export default PlaceIndex;
