import { GET_CONTACT, FETCH_CONTACTS } from "./types";

const initialState = {
  contacts: [],
  contact: {}
}

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
      default:
        return state;
  }
}

export default contactReducer