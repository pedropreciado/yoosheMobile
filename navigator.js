import React from 'react';
import  { createStackNavigator } from 'react-navigation';

import PlaceIndexContainer from './components/place/place_index_container';
import PlaceShow from './components/place/place_show';

const TabNavigator = createStackNavigator({
    placeIndex: { screen: PlaceIndexContainer},
    placeShow: { screen: PlaceShow }
}, {
    navigationOptions: {
        headerTintColor: 'red',
        headerStyle: {
            backgroundColor: 'grey',
            height: 30
        }
    }
})

export default TabNavigator;