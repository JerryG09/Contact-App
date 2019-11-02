import { GET_CONTACT } from "./types";

const initialState = {

}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,

      };
      default:
        return state;
  }
}

export default contactReducer