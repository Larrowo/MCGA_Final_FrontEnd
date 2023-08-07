import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '../models/routes'

export const AuthGuard = () => {
  const userState = useSelector((store) => store.user)

  return userState.id ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
}
