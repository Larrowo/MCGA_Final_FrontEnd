import { useSelector } from 'react-redux'
// import { login } from '../../Redux/Login/thunks'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models/routes'
import styles from './login.module.css'

function index () {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.login.user)

  const logIn = () => {
    user.name = 'test'
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
  }

  return (
    <div className={styles.container} >
      <h2>LOGIN</h2>
      <form action="submit">
        <label htmlFor="nameInput" >Enter your Name</label>
        <input type="text" id="nameInput" />
        <label htmlFor="passwordInput" >Enter your password</label>
        <input type="password" id="passwordInput" />
        <button onClick={logIn} >LOGIN</button>
      </form>
    </div>
  )
}
export default index
