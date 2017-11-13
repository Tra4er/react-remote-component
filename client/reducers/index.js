import {combineReducers} from 'redux';
import Widgets from './widgets';

const allReducers = combineReducers({
    widgets: Widgets,
});

export default allReducers;