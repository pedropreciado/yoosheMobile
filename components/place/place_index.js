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
          <FlatList contentContainerStyle={{
            flex: 1,
            backgroundColor: 'pink'
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
