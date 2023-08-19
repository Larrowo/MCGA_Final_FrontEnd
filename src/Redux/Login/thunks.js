import {
  getLoginPending,
  getLoginSuccess,
  getLoginError,
  setToken,
  logout
} from './actions'

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(getLoginPending())
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API}/auth/login`, options)

      const json = await response.json()
      response.status !== 200
        ? dispatch(getLoginError(json.toString()))
        : dispatch(getLoginSuccess(json.data))
      return response.data
    } catch (error) {
      dispatch(getLoginError(error.toString()))
      throw error
    }
  }
}
