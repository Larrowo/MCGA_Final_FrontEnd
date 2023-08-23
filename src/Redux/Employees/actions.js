import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_LOADING,
  ADD_EMPLOYEE_ERROR,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_LOADING,
  GET_EMPLOYEES_ERROR,
  GET_EMPLOYEE_BY_ID_SUCCESS,
  GET_EMPLOYEE_BY_ID_LOADING,
  GET_EMPLOYEE_BY_ID_ERROR,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_LOADING,
  EDIT_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_LOADING,
  DELETE_EMPLOYEE_ERROR,
  CLEAR_ERROR
} from './types'

// ADD EMPLOYEE
export const addEmployeeSuccess = (data) => {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload: data
  }
}

export const addEmployeeLoading = () => {
  return {
    type: ADD_EMPLOYEE_LOADING
  }
}

export const addEmployeeError = (error) => {
  return {
    type: ADD_EMPLOYEE_ERROR,
    payload: error
  }
}

// EDIT EMPLOYEE
export const editEmployeeSuccess = (data) => {
  return {
    type: EDIT_EMPLOYEE_SUCCESS,
    payload: data
  }
}

export const editEmployeeLoading = () => {
  return {
    type: EDIT_EMPLOYEE_LOADING
  }
}

export const editEmployeeError = (error) => {
  return {
    type: EDIT_EMPLOYEE_ERROR,
    payload: error
  }
}

// DELETE EMPLOYEE
export const deleteEmployeeSuccess = (data) => {
  return {
    type: DELETE_EMPLOYEE_SUCCESS,
    payload: data
  }
}

export const deleteEmployeeLoading = () => {
  return {
    type: DELETE_EMPLOYEE_LOADING
  }
}

export const deleteEmployeeError = (error) => {
  return {
    type: DELETE_EMPLOYEE_ERROR,
    payload: error
  }
}

// GET EMPLOYEES
export const getEmployeesSuccess = (data) => {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    payload: data
  }
}

export const getEmployeesLoading = () => {
  return {
    type: GET_EMPLOYEES_LOADING
  }
}

export const getEmployeesError = (error) => {
  return {
    type: GET_EMPLOYEES_ERROR,
    payload: error
  }
}

// GET EMPLOYEE BY ID
export const getEmployeeByIdLoading = () => {
  return {
    type: GET_EMPLOYEE_BY_ID_LOADING
  }
}

export const getEmployeeByIdSuccess = (data) => {
  return {
    type: GET_EMPLOYEE_BY_ID_SUCCESS,
    payload: data
  }
}

export const getEmployeeByIdError = (error) => {
  return {
    type: GET_EMPLOYEE_BY_ID_ERROR,
    payload: error
  }
}

export const clearErrorAction = () => {
  return {
    type: CLEAR_ERROR
  }
}
