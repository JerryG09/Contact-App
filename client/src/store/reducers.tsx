import {combineReducers} from "redux"
import contactReduccer from "../containers/redux/reducer"

const rootReducer = combineReducers({
    contacts: contactReduccer
})

export default rootReducer