import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Login/thunks'

function index () {
  const dispatch = useDispatch()
  const logIn = () => {
    dispatch(login())
    const user = useSelector((store) => store.user)
    if (user) {
      // navigate to the employees list page
    }
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <button onClick={logIn} ></button>
    </div>
  )
}
export default index
