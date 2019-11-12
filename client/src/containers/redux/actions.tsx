import * as types from "./types"
import axios from "axios"

export const createContact = (data: any) => {
  return {
    type: types.GET_CONTACT,
    payload: data
  }
}

export const getContacts = (data: any) => {
  return {
    type: types.FETCH_CONTACTS,
    payload: data
  }
}

export const getAContact = (id: number) => (dispatch: any) => {
  axios.get('/contacts/?id')
    .then(res => {
      dispatch(getAContact(res.data))
    }, (error) => {
      console.log(error)
    })
}

export const fetchContacts = () => (dispatch: any) => {
  axios.get('/contacts')
    .then(res => {
      dispatch(getContacts(res.data))
    }, (error) => {
      console.log(error)
    })
}

export const addContact = () => (dispatch: any) => {
  axios.post('/post', {})
    .then(res => {
      dispatch()
    })
}

export const editContact = () => {

}
