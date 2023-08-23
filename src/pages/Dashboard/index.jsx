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
  }, [dispatch, employees])

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
                    <button className={styles.adminButtons} value="Update" onClick={() => handleButtonClick(actionsTypes.EDIT, employee)}>Update</button>
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
