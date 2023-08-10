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
  DELETE_EMPLOYEE_ERROR
} from './types'

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

export const getEmployeeSuccess = (data) => {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    payload: data
  }
}

export const getEmployeeLoading = (data) => {
  return {
    type: GET_EMPLOYEES_LOADING
  }
}

export const getEmployeeError = (error) => {
  return {
    type: GET_EMPLOYEES_ERROR,
    payload: error
  }
}
export const getProductByIdPending = () => {
  return {
    type: GET_EMPLOYEE_BY_ID_LOADING
  }
}

export const getProductByIdSuccess = (data) => {
  return {
    type: GET_EMPLOYEE_BY_ID_SUCCESS,
    payload: data
  }
}

export const getProductByIdError = (error) => {
  return {
    type: GET_EMPLOYEE_BY_ID_ERROR,
    payload: error
  }
}
