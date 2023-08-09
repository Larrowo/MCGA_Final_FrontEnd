import { useSelector } from 'react-redux'
// import { login } from '../../Redux/Login/thunks'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models/routes'

function index () {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.login.user)

  const logIn = () => {
    user.name = 'test'
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <button onClick={logIn} >LOGIN</button>
    </div>
  )
}
export default index
