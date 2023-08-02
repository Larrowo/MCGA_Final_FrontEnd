import { createStore, applyMiddleware } from 'redux'
import usersReducer from './Users/reducer'
import thunk from 'redux-thunk'

const rootReducer = createStore(usersReducer, applyMiddleware(thunk))

const store = rootReducer

export default store
