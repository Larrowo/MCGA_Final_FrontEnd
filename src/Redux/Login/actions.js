import {
  GET_LOGIN_PENDING,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  SET_TOKEN,
  LOGOUT
} from './types'

export const getLoginPending = () => {
  return {
    type: GET_LOGIN_PENDING
  }
}

export const getLoginSuccess = (data) => {
  return {
    type: GET_LOGIN_SUCCESS,
    payload: data
  }
}

export const getLoginError = (error) => {
  return {
    type: GET_LOGIN_ERROR,
    payload: error
  }
}

const TOKEN_KEY = 'UserToken'
export const setToken = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token)
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY)
  return {
    type: LOGOUT,
    payload: {
      token: '',
      user: {
        name: '',
        email: '',
        role: ''
      }
    }
  }
}
