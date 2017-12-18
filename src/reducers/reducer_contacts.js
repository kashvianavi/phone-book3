import { FETCH_CONTACTS, CREATE_CONTACTS } from '../actions';
import _ from  'lodash';

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_CONTACTS:
    return _.mapKeys(action.payload.data, 'id');
    case CREATE_CONTACTS:
    return { ...state, [action.payload.data.id]: action.payload.data };

  default: return state;
}
}
