import {
  getEmployeesPending,
  getEmployeesSuccess,
  getEmployeesError,
  createEmployeePending,
  createEmployeeSuccess,
  createEmployeeError,
  updateEmployeePending,
  updateEmployeeSuccess,
  updateEmployeeError,
  getEmployeeByIdPending,
  getEmployeeByIdSuccess,
  getEmployeeByIdError,
  deleteEmployeePending,
  deleteEmployeeSuccess,
  deleteEmployeeError

} from './actions'

// GET EMPLOYEES LIST
export const getEmployees = () => {
  return (dispatch, getState) => {
    dispatch(getEmployeesPending())
    const token = getState().login.token
    return fetch(`${import.meta.env.REACT_APP_API}/Employees`, {
      headers: {
        token
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return response.json().then(({ message }) => {
            throw new Error(message)
          })
        }
        return response.json()
      })
      .then((response) => {
        dispatch(getEmployeesSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getEmployeesError(error.toString()))
      })
  }
}

// GET EMPLOYEE BY ID
export const getEmployeeById = (id) => {
  return (dispatch) => {
    dispatch(getEmployeeByIdPending())
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
export const createEmployee = (values) => {
  return (dispatch, getState) => {
    dispatch(createEmployeePending())
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
        dispatch(createEmployeeSuccess(response.data))
        return response.data
      })
      .catch((error) => {
        dispatch(createEmployeeError(error.toString()))
      })
  }
}

// UPDATE EMPLOYEE
export const updateEmployee = (id, values) => {
  return (dispatch) => {
    dispatch(updateEmployeePending())
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
        dispatch(updateEmployeeSuccess(response.data))
        return response.data
      })
      .catch((error) => {
        dispatch(updateEmployeeError(error.toString()))
      })
  }
}

// DELETE EMPLOYEE
export const deleteEmployee = (id) => {
  return (dispatch) => {
    dispatch(deleteEmployeePending())
    return fetch(`${import.meta.env.REACT_APP_API}/Employees/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (response.status !== 204) {
          return response.json()
            .then(({ message }) => {
              throw new Error(message)
            })
        }
        dispatch(deleteEmployeeSuccess(id))
      })
      .catch((error) => {
        dispatch(deleteEmployeeError(error.toString()))
      })
  }
}
