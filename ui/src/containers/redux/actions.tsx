import * as types from "./types"

export const getAContact = (contactID: number) => {
    return {
        // axios call
        type: types.GET_CONTACT
    }
}

export const fetchContacts = () => {
    return {
        // axios call
    }
}