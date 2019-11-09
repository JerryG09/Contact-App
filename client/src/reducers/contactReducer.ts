import {
  GET_CONTACT,
  ADD_CONTACT,
  SET_CONTACT,
  EDIT_CONTACT
} from '../containers/redux/types';

// const initialState = {

// }

const contactReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_CONTACT:
      return [...state, action.payload];
    case SET_CONTACT:
      return [...state, ...action.payload];
    case EDIT_CONTACT:
      return [...state]
    default:
      return state;
  }
};

export default contactReducer;
