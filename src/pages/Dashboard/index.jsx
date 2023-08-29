import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { actionTypes } from '../../models/actionTypes'
import { userTypes } from '../../models/userTypes'
import { clearError, deleteEmployee, getEmployees } from '../../Redux/Employees/thunks'
import { logOut } from '../../Redux/Login/thunks'
import Modal from '../../components/Modal'
import useModal from '../../helpers/hooks/useModal'
import { calculateAge } from '../../helpers/calculateAge'
import styles from './dashboard.module.css'

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
  }, [dispatch, employees])

  const dashboardLogOut = () => {
    dispatch(logOut())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  const handleButtonClick = (actionType, employee) => {
    if (actionType === actionTypes.EDIT) {
      setModalAction(actionTypes.EDIT)
      setEmployeeToEdit(employee)
      handleToggleModal()
    } else {
      setModalAction(actionTypes.CREATE)
      handleToggleModal()
    }
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteEmployee(id))
  }
  const handleClearError = () => {
    dispatch(clearError())
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error </p>
        <button onClick={handleClearError} >Clear Error</button>
        <button onClick={dashboardLogOut} >LOGOUT</button>
      </div>
    )
  }

  if (isLoading) return <p>Loading... </p>

  return (
    <div>
      <button className={styles.adminButtons} onClick={dashboardLogOut} >LOGOUT</button>
      <h2>DASHBOARD</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>DNI</th>
              <th>Age</th>
              <th>Email</th>
              <th className={userState.role === userTypes.ADMIN ? styles.showTableButtons : styles.hideTableButtons}>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.surname}</td>
                  <td>{employee.DNI}</td>
                  <td>{calculateAge(employee.birthDate)}</td>
                  <td>{employee.email}</td>
                  <td className={userState.role === userTypes.ADMIN ? styles.showTableButtons : styles.hideTableButtons}>
                    <button className={styles.adminButtons} value="Update" onClick={() => handleButtonClick(actionTypes.EDIT, employee)}>Update</button>
                    <button className={styles.adminButtons} value="Delete" onClick={() => handleDeleteProduct(employee._id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={userState.role === userTypes.ADMIN ? styles.showAddButton : styles.hideAddButton }>
        <h3>Add a Product:</h3>
        <button className={styles.adminButtons} onClick={() => handleButtonClick(actionTypes.CREATE)} > ADD </button>
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
