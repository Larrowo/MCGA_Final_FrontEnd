import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect, useState } from 'react'
import { deleteEmployee, getEmployees } from '../../Redux/Employees/thunks'
import styles from './dashboard.module.css'
import Modal from '../../components/Modal'
import useModal from '../../helpers/hooks/useModal'
import { actionsTypes } from '../../models/actionTypes'

function index () {
  const [modalAction, setModalAction] = useState('')
  const [employeeToEdit, setEmployeeToEdit] = useState({})
  const [isModalOpen, handleToggleModal] = useModal()
  const user = useSelector((store) => store.login.user)
  const { employees, error, isLoading } = useSelector((store) => store.employees)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!employees || employees.length === 0) {
      dispatch(getEmployees())
    }
  }, [employees])

  const logOut = () => {
    user.name = ''
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  const handleButtonClick = (actionType, employee) => {
    if (actionType === actionsTypes.EDIT) {
      setModalAction(actionsTypes.EDIT)
      setEmployeeToEdit(employee)
      handleToggleModal()
    } else {
      setModalAction(actionsTypes.CREATE)
    }
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteEmployee(id))
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
                  <button value="Update" onClick={() => handleButtonClick(actionsTypes.EDIT, employee)}>Update</button>
                  <button value="Delete" onClick={() => handleDeleteProduct(employee._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h3>Add a Product:</h3>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleToggleModal}
        action={modalAction}
        employee={employeeToEdit}
      />
    </div>

  )
}
export default index
