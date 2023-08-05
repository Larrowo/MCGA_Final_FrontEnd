import {
  getLoginPending,
  getLoginSuccess,
  getLoginError,
  setUser,
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
    return await fetch(`${process.env.REACT_APP_API}/auth/login`, options)
      .then(async (response) => {
        if (response.status !== 200) {
          return response.json()
            .then(({ message }) => {
              throw new Error(message)
            })
        }
        return response.json()
      })
      .then((response) => {
        dispatch(getLoginSuccess(response.data))
        dispatch(setUser(response.data))
        dispatch(setToken(response.data.token))
        return response.data
      })
      .catch((error) => {
        dispatch(getLoginError(error.toString()))
        throw error
      })
  }
}

export const getUserData = () => async (dispatch, getState) => {
  try {
    const token = getState().login.token
    if (!token) {
      return
    }
    dispatch(getLoginPending())
    const response = await fetch(`${process.env.REACT_APP_API}/auth/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: JSON.stringify({
        token
      })
    })
    if (!response.ok) {
      throw new Error('Bad auth')
    }
    const user = await response.json()
    dispatch(setUser(user.data))
  } catch (error) {
    dispatch(logout())
    dispatch(getLoginError(error.toString()))
  }
}
