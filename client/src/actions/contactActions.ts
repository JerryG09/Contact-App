import axios from "axios"
import * as types from "../containers/redux/types"

export const getContacts = (payload: any) => {
  return {
    type: types.FETCH_CONTACTS,
    payload
  }
}

export const fetchDB = (dispatch: any) => {
  axios.get('/contacts')
    .then(res => {
      dispatch(getContacts(res))
    }, (error) => {
      console.log(error)
    })
}
