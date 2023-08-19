import { useDispatch } from 'react-redux'
// import { login } from '../../Redux/Login/thunks'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models/routes'
import styles from './login.module.css'
import { useState } from 'react'
import { login } from '../../Redux/Login/thunks'

function index () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    <div className={styles.container} >
      <h2>LOGIN</h2>
      <form action="submit">
        <label htmlFor="nameInput" >Enter your Email</label>
        <input
          type="text"
          id="nameInput"
          name="email"
          onChange={handleChange} />
        <label htmlFor="passwordInput" >Enter your password</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          onChange={handleChange} />
        <button onClick={logIn} >LOGIN</button>
      </form>
    </div>
  )
}
export default index
