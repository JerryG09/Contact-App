import thunk from "redux-thunk";
import {createLogger} from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"

import rootReducer from "./reducers"

const logger = createLogger()
const middleware = [logger, thunk]

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()      
    )
)

export default store;