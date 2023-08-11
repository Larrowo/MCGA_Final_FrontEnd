import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect } from 'react'
import { deleteEmployee, getEmployees } from '../../Redux/Employees/thunks'
import styles from './dashboard.module.css'

function index () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store) => store.login.user)
  const { employees, error, isLoading, message } = useSelector((store) => store.employees)

  useEffect(() => {
    if (!employees || employees.length === 0) {
      dispatch(getEmployees())
    }
  }, [employees])

  const logOut = () => {
    user.name = ''
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteEmployee(id))
  }

  if (error) {
    console.log(message)
    console.log(employees)
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
      <button onClick={logOut} >LOGOUT</button>
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
                            <td>
                            {/* <button value="Update" onClick={() => handleUpdateProduct(product)}>Update</button> */}
                            <button value="Delete" onClick={() => handleDeleteProduct(employee._id)}>Delete</button>
                            </td>
                            </tr>
                          )
                        })}
                    </tbody>
            </table>
            <h3>Add a Product:</h3>
              {/* <button value='Add a product' onClick={() => { setIsAdding(true) }}>ADD</button> */}
    </div>

  )
}
export default index
