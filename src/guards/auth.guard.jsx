import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '../models/routes'
// import { store } from '../Redux/store.js'

export const AuthGuard = () => {
  const userState = useSelector((store) => store.login.user)

  return userState.name ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
}
