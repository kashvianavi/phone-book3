import { combineReducers } from 'redux';
import Contacts from './reducer_contacts';



const rootReducer = combineReducers({
  contacts: Contacts
});

export default rootReducer;
