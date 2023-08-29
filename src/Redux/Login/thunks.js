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

      if (response.status !== 200) {
        dispatch(getLoginError(json.error))
        console.log(json.error.toString())
      } else {
        dispatch(getLoginSuccess(json.data.user))
        dispatch(setToken(json.data.token))
      }
    } catch (error) {
      dispatch(getLoginError(error))
      console.log(error)
      throw error
    }
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch(logout())
  }
}
