import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'

function index () {
  const navigate = useNavigate()
  const user = useSelector((store) => store.login.user)
  const logOut = () => {
    user.name = ''

    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <div>
      <h2>DASHBOARD</h2>
      <button onClick={logOut} >LOGOUT</button>
    </div>

  )
}
export default index
