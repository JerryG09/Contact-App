import {combineReducers} from "redux"
import contactReduccer from "../containers/redux/reducer"

const rootReducer = combineReducers({
    contact: contactReduccer
})

export default rootReducer