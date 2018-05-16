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
      <View style={{
          flex: 1
        }}>
        <View style={{
            backgroundColor: '#141515',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
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
            flex: 1,
            backgroundColor: '#424242'
          }}
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%'
          }}
          data={this.props.places}
          renderItem={({ item }) => {
            return (<PlaceIndexItem place={item} key={item._id}/>)
          }}
          >
      </FlatList>
      </View>
    )
  }

}

export default PlaceIndex;
