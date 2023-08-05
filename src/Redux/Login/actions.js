import {
  GET_LOGIN_PENDING,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  SET_USER,
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

export const setUser = (user) => {
  localStorage.setItem(process.env.REACT_APP_USER_KEY, JSON.stringify(user))
  return {
    type: SET_USER,
    payload: user
  }
}

const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(process.env.REACT_APP_USER_KEY)
  return {
    type: LOGOUT,
    payload: {
      user: null,
      token: null
    }
  }
}
