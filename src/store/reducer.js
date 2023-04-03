import { LOCAL_STORAGE_KEY } from '../constants/stringValues';
import { INIT, CREATE, REMOVE, EDIT } from '../constants/actionTypes';

const reducer = (state, action) => {

  let newState = [];

  switch (action.type) {
    case INIT :
      return action.data;

    case CREATE :
      newState = [ action.data, ...state ];
      break;

    case REMOVE :
      newState = state.filter((item) => item.id !== action.targetId);
      break;

    case EDIT :
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item
      );
      break;

    default :
      return state;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));

  return newState;
}

export default reducer;