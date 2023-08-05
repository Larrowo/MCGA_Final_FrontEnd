import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import employeesReducer from './Employees/reducer'
import loginReducer from './Login/reducer'

const store = createStore(
  combineReducers({ employees: employeesReducer, login: loginReducer }),
  applyMiddleware(thunk)
)

export default store
