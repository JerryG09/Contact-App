import * as types from "./types"
import axios from "axios"

export const getAContact = (contactID: number) => {
    
}

export const getContacts = (data: any) => {
  return {
    type: types.FETCH_CONTACTS,
    payload: data
  }
}

export const fetchContacts = () => (dispatch: any) => {
  axios.get('/contacts')
    .then(res => {
      dispatch(getContacts(res.data))
    }, (error) => {
      console.log(error)
    })
}

// export const addContact = () => (dispatch: any) => {
//   console.log('add contact')
//   axios.post('/register')
//     .then(res => dispatch(console.log(res)))
// }