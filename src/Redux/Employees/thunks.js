import {
  getEmployeesLoading,
  getEmployeesSuccess,
  getEmployeesError,
  addEmployeeLoading,
  addEmployeeSuccess,
  addEmployeeError,
  editEmployeeLoading,
  editEmployeeSuccess,
  editEmployeeError,
  getEmployeeByIdLoading,
  getEmployeeByIdSuccess,
  getEmployeeByIdError,
  deleteEmployeeLoading,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  clearErrorAction

} from './actions'

// GET EMPLOYEES LIST
export const getEmployees = () => {
  return async (dispatch, getState) => {
    dispatch(getEmployeesLoading())
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/employees`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
      })

      const json = await response.json()
      response.status !== 200
        ? dispatch(getEmployeesError(json.toString()))
        : dispatch(getEmployeesSuccess(json.data))
    } catch (error) {
      dispatch(getEmployeesError(error.toString()))
    }
  }
}

// ADD EMPLOYEE
export const addEmployee = (values) => {
  return async (dispatch, getState) => {
    dispatch(addEmployeeLoading())
    console.log(values)
    const token = getState().login.token
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`
      },
      mode: 'cors',
      body: JSON.stringify(values)
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/employees`, options)

      const json = await response.json()

      response.status !== 201
        ? dispatch(addEmployeeError(json.toString()))
        : dispatch(addEmployeeSuccess(json.data))
    } catch (error) {
      dispatch(addEmployeeError(error.toString()))
      console.log(error.toString())
    }
  }
}

// EDIT EMPLOYEE
export const editEmployee = (id, values) => {
  return async (dispatch, getState) => {
    dispatch(editEmployeeLoading())
    const token = getState().login.token
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/employee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          authorization: `Bearer ${token}`
        },
        mode: 'cors',
        body: JSON.stringify(values)
      })
      const json = response.data.json()
      console.log(json.data)
      response.status !== 200
        ? dispatch(editEmployeeError(json.toString()))
        : dispatch(editEmployeeSuccess(json.data))
    } catch (error) {
      dispatch(editEmployeeError(error.toString()))
      console.log(error.toString())
    }
  }
}

// DELETE EMPLOYEE
export const deleteEmployee = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteEmployeeLoading())
    const token = getState().login.token
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_API_URL}/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
          mode: 'cors'
        }
      )
      if (response.status === 204) {
        dispatch(deleteEmployeeSuccess(id))
      } else {
        const jsonData = await response.json()
        response.status === 200
          ? dispatch(deleteEmployeeSuccess(jsonData.data))
          : dispatch(deleteEmployeeError(jsonData.error))
      }
    } catch (error) {
      dispatch(deleteEmployeeError(error.toString()))
      console.log(error.toString())
    }
  }
}

/**
 * !THIS FUNCTION IS DEPRECATED
 */
// GET EMPLOYEE BY ID
export const getEmployeeById = (id) => {
  return (dispatch) => {
    dispatch(getEmployeeByIdLoading())
    return fetch(`${import.meta.env.REACT_APP_API}/Employees?_id=${id}`)
      .then((response) => {
        if (response.status !== 200) {
          return response.json().then(({ message }) => {
            throw new Error(message)
          })
        }
        return response.json()
      })
      .then((response) => {
        dispatch(getEmployeeByIdSuccess(response.data[0]))
        return response.data[0]
      })
      .catch((error) => {
        dispatch(getEmployeeByIdError(error.toString()))
      })
  }
}

export const clearError = () => {
  return (dispatch) => {
    dispatch(clearErrorAction())
  }
}
