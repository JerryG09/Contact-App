import * as types from "./types"
import { number } from "prop-types"

export const getContact = (contactID: number) => {
    return {
        type: types.GET_CONTACT
    }
}