import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { actionsTypes } from '../../models/actionTypes'
import { deleteEmployee, getEmployees } from '../../Redux/Employees/thunks'
import { logOut } from '../../Redux/Login/thunks'
import Modal from '../../components/Modal'
import useModal from '../../helpers/hooks/useModal'
import { calculateAge } from '../../helpers/calculateAge'
import styles from './dashboard.module.css'
import { userTypes } from '../../models/userTypes'

function index () {
  const [modalAction, setModalAction] = useState('')
  const [employeeToEdit, setEmployeeToEdit] = useState({})
  const [isModalOpen, handleToggleModal] = useModal()
  const { employees, error, isLoading } = useSelector((store) => store.employees)
  const userState = useSelector((store) => store.login.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!employees || employees.length === 0) {
      dispatch(getEmployees())
    }
  }, [employees])

  console.log(userState)
  const dashboardLogOut = () => {
    dispatch(logOut())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  const handleButtonClick = (actionType, employee) => {
    if (actionType === actionsTypes.EDIT) {
      setModalAction(actionsTypes.EDIT)
      setEmployeeToEdit(employee)
      handleToggleModal()
    } else {
      setModalAction(actionsTypes.CREATE)
      handleToggleModal()
    }
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteEmployee(id))
  }

  if (error) {
    return (
      <>
        <p>Error </p>
        <button onClick={dashboardLogOut} >LOGOUT</button>
      </>
    )
  }

  if (isLoading) return <p>Loading... </p>

  return (
    <div>
      <button onClick={dashboardLogOut} >LOGOUT</button>
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
                <td className={styles.tbody}>{calculateAge(employee.birthDate)}</td>
                <td className={userState.role === userTypes.ADMIN ? styles.showTableButtons : styles.hideTableButtons}>
                  <button value="Update" onClick={() => handleButtonClick(actionsTypes.EDIT, employee)}>Update</button>
                  <button value="Delete" onClick={() => handleDeleteProduct(employee._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className={userState.role === userTypes.ADMIN ? styles.showAddButton : styles.hideAddButton }>
        <h3>Add a Product:</h3>
        <button onClick={() => handleButtonClick(actionsTypes.CREATE)} > ADD </button>
      </div>
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
