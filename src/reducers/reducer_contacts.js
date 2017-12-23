import { FETCH_CONTACTS, DELETE_CONTACTS } from '../actions';
import _ from  'lodash';

export default function(state = {}, action){
  switch(action.type) {
    case DELETE_CONTACTS:
    return _.omit(state, action.payload);
    case FETCH_CONTACTS:
    return _.mapKeys(action.payload.data, '_id');


  default: return state;
}
}
