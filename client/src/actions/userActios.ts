interface User {
  firstName?: string
  lastName?: string
  email?: string
}

const initialState: User = {};

function userReducer(state = initialState, action: FSA<any>) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload
      }
    case 'LOGOUT':
      return initialState;
    default:
      return state
  }
}

export default userReducer
