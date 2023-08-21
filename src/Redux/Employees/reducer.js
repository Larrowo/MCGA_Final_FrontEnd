import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_LOADING,
  ADD_EMPLOYEE_ERROR,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_LOADING,
  GET_EMPLOYEES_ERROR,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_LOADING,
  EDIT_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_LOADING,
  DELETE_EMPLOYEE_ERROR
} from './types'

const INITIAL_STATE_VALUE = {
  employees: [],
  isLoading: false,
  error: false,
  message: ''
}

const employeesReducer = (state = INITIAL_STATE_VALUE, action) => {
  switch (action.type) {
    // ADD EMPLOYEE
    case ADD_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        message: 'Loading...'
      }
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        employees: [...state.employees, action.payload]
      }
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload
      }
    // GET EMPLOYEES
    case GET_EMPLOYEES_LOADING:
      return {
        ...state,
        isLoading: true,
        message: 'LOADING EMPLOYEES'
      }
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employees: action.payload,
        message: 'EMPLOYEES LOADED'
      }
    case GET_EMPLOYEES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    // EDIT EMPLOYEE
    case EDIT_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: false,
        message: 'Loading...'
      }
    case EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        employees: action.payload
      }
    case EDIT_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload
      }
    // DELETE EMPLOYEE
    case DELETE_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        employees: [...state.employees.filter((employee) => employee._id !== action.payload)],
        message: 'Employee deleted Successfully'
      }
    case DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload
      }
    default:
      return state
  }
}

export default employeesReducer
