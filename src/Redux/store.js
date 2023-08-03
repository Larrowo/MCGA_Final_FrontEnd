import { createStore, applyMiddleware } from 'redux'
import employeesReducer from './Employees/reducer'
import thunk from 'redux-thunk'

const rootReducer = createStore(employeesReducer, applyMiddleware(thunk))

const store = rootReducer

export default store
