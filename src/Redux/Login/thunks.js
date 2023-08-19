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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      body: JSON.stringify(credentials)
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/login`, options)

      const json = await response.json()
      console.log(json.data)
      response.status !== 200
        ? dispatch(getLoginError(json.toString()))
        : dispatch(getLoginSuccess(json.data.user), setToken(json.data.token))
    } catch (error) {
      dispatch(getLoginError(error.toString()))
      throw error
    }
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch(logout())
  }
}
