import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect } from 'react'
import { getEmployees } from '../../Redux/Employees/thunks'
import styles from './dashboard.module.css'

function index () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store) => store.login.user)
  const { employees, error, isLoading } = useSelector((store) => store.employees)

  useEffect(() => {
    if (!employees || employees.length === 0) {
      dispatch(getEmployees())
    }
  }, [employees])

  console.log(employees)

  const logOut = () => {
    user.name = ''
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  if (error) {
    return (
    <>
     <p>Error </p>
     <button onClick={logOut} >LOGOUT</button>
    </>
    )
  }

  if (isLoading) return <p>Loading... </p>

  return (
    <div>
      <h2>DASHBOARD</h2>
      <table className={styles.table}>
                    <thead>
                        <tr>
                        <th className={styles.thead}>Name</th>
                        <th className={styles.thead}>LastName</th>
                        <th className={styles.thead}>DNI</th>
                        <th className={styles.thead}>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                          return (
                            <tr key={employee._id}>
                            <td className={styles.tbody}>{employee.name}</td>
                            <td className={styles.tbody}>{employee.surname}</td>
                            <td className={styles.tbody}> {employee.DNI}</td>
                            <td className={styles.tbody}>{employee.age}</td>
                            </tr>
                          )
                        })}
                    </tbody>
            </table>
      <button onClick={logOut} >LOGOUT</button>
    </div>

  )
}
export default index
