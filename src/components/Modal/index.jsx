import { useDispatch } from 'react-redux'
import { addEmployeeLoading } from '../../Redux/Employees/actions'
import styles from './modal.module.css'
import { useState } from 'react'
import { addEmployee, editEmployee } from '../../Redux/Employees/thunks'
import { actionsTypes } from '../../models/actionTypes'
import EditModal from '../Modal/EditModal'
import AddModal from '../Modal/AddModal'

const Modal = ({ isOpen, handleClose, action, employee }) => {
  const [newEmployeeData, setNewEmployeeData] = useState({
    name: '',
    surname: '',
    email: '',
    nationality: '',
    DNI: null,
    birthDate: '',
    age: null

  })

  const dispatch = useDispatch()

  // const TEST_EMPLOYEE = {
  //   name: 'Testing ',
  //   surname: 'add',
  //   email: 'add@add.com',
  //   nationality: 'peruvian',
  //   DNI: 4023042,
  //   birthDate: new Date(),
  //   age: calculateAge()
  // }

  const handleCancelButtonClick = () => {
    handleClose()
    setNewEmployeeData({
      name: '',
      surname: '',
      email: '',
      nationality: '',
      DNI: null,
      birthDate: '',
      age: null
    })
  }

  const handleChange = (event) => {
    setNewEmployeeData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = () => {
    if (action === actionsTypes.EDIT) {
      dispatch(editEmployee(employee._id, newEmployeeData))
      handleClose()
    } else {
      dispatch(addEmployee())
    }
  }

  return (
    <div className={isOpen ? styles.modalOpen : styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topRow} >
          <h2>{action}</h2>
          <button className={styles.cancelButton} onClick={handleCancelButtonClick}>Cancel</button>
        </div>
        { action === actionsTypes.EDIT
          ? <EditModal
            newEmployeeData={newEmployeeData}
            employee={employee}
            handleChange={handleChange} />
          : <AddModal
            newEmployeeData={newEmployeeData}
            handleChange={handleChange}
          />
        }
        <div className={styles.bottomRow} >
          <button onClick={handleSubmit} >Save</button>
        </div>
      </div>
    </div>
  )
}
export default Modal
