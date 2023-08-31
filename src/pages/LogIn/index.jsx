import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from '../../Redux/Login/thunks'

import { PrivateRoutes } from '../../models/routes'

import styles from './login.module.css'

function index () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector((state) => state.login.error)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setCredentials((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }
  const logIn = () => {
    dispatch(login(credentials))
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
  }

  return (
    <div className={styles.logInContainer}>
      <h2 className={styles.heading}>LOGIN</h2>
      <form className={styles.form}>
        <label htmlFor="nameInput" className={styles.label}>
          Enter your Email
        </label>
        <input
          type="text"
          id="nameInput"
          name="email"
          className={styles.input}
          onChange={handleChange}
        />
        <label htmlFor="passwordInput" className={styles.label}>
          Enter your password
        </label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          className={styles.input}
          onChange={handleChange}
        />
        <p className={error ? styles.showErrorParagraph : styles.hideErrorParagraph}>Please check your credentials</p>
        <button type="button" className={styles.button} onClick={logIn}>
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default index
