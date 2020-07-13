import { combineReducers } from 'redux';
import species from './Components/speciesReducer';

const rootReducer = combineReducers({species});

export default rootReducer;