import { FETCH_CONTACTS, CREATE_CONTACTS } from '../actions';
import _ from  'lodash';

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_CONTACTS:
    return _.mapKeys(action.payload.data, '_id');


  default: return state;
}
}
