import { CHANGE_SEARCH_FIELD }  from './constants';

const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
        //could also be {...state, {searchField: action.payload}} without Object.assign
      default:
        return state;  
  }
}