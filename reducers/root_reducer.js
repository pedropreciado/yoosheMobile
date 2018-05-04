import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PlaceReducer from './place_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  search: SearchReducer,
  places: PlaceReducer
})

export default RootReducer;
