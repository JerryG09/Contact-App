// import {} from "redux-thunk";
// import {createLogger} from "redux-logger"
import { createStore, applyMiddleware } from "redux"

import rooReducer from "./reducers"

// const loggerMiddleware = createLogger()
// const middleware = [loggerMiddleware]

const store = createStore(
    rooReducer,
    applyMiddleware()
)

export default store;