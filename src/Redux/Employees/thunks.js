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
  deleteEmployeeError

} from './actions'

// GET EMPLOYEES LIST
export const getEmployees = () => {
  return async (dispatch, getState) => {
    dispatch(getEmployeesLoading())
    // const token = getState().login.token
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/api/employees`, {
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

// ADD EMPLOYEE
export const addEmployee = (values) => {
  return (dispatch, getState) => {
    dispatch(addEmployeeLoading())
    const token = getState().login.token
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: JSON.stringify(values)
    }
    return fetch(`${import.meta.env.REACT_APP_API}/Employees`, options)
      .then((response) => {
        if (response.status !== 201) {
          return response.json().then(({ message }) => {
            throw new Error(message)
          })
        }
        return response.json()
      })
      .then((response) => {
        dispatch(addEmployeeSuccess(response.data))
        return response.data
      })
      .catch((error) => {
        dispatch(addEmployeeError(error.toString()))
      })
  }
}

// EDIT EMPLOYEE
export const editEmployee = (id, values) => {
  return (dispatch) => {
    dispatch(editEmployeeLoading())
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
    return fetch(`${import.meta.env.REACT_APP_API}/Employees/${id}`, options)
      .then((response) => {
        if (response.status !== 200) {
          return response.json().then(({ message }) => {
            throw new Error(message)
          })
        }
        return response.json()
      })
      .then((response) => {
        dispatch(editEmployeeSuccess(response.data))
        return response.data
      })
      .catch((error) => {
        dispatch(editEmployeeError(error.toString()))
      })
  }
}

// DELETE EMPLOYEE
export const deleteEmployee = (id) => {
  return async (dispatch) => {
    dispatch(deleteEmployeeLoading())
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_API_URL}/api/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }
      )
      const json = await response.json()
      dispatch(deleteEmployeeSuccess(json.data))
    } catch (error) {
      dispatch(deleteEmployeeError(error.toString()))
      console.log(error.toString())
    }
  }
}
