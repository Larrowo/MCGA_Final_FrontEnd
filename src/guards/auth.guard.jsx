import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const authGuard = () => {
  const userState = useSelector((store) => store.user)

  return userState.id ? <Outlet/> : <Navigate replace to={<Login/>}/>
}
