import { useDispatch } from 'react-redux'
import styles from './modal.module.css'
import { useState } from 'react'
import { addEmployee, editEmployee } from '../../Redux/Employees/thunks'
import { actionsTypes } from '../../models/actionTypes'
import EditModal from '../Modal/EditModal'
import AddModal from '../Modal/AddModal'

const Modal = ({ isOpen, handleClose, action, employee }) => {
  const dispatch = useDispatch()
  const [newEmployeeData, setNewEmployeeData] = useState({
    name: '',
    surname: '',
    email: '',
    nationality: '',
    DNI: '',
    birthDate: ''
  })
  const handleCancelButtonClick = () => {
    handleClose()
    setNewEmployeeData({
      name: '',
      surname: '',
      email: '',
      nationality: '',
      DNI: '',
      birthDate: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const isSubmitDisabled = () => {
    return (
      !newEmployeeData.name ||
      !newEmployeeData.surname ||
      !newEmployeeData.email ||
      !newEmployeeData.DNI ||
      !newEmployeeData.birthDate
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isSubmitDisabled()) {
      if (action === actionsTypes.EDIT) {
        dispatch(editEmployee(employee._id, newEmployeeData))
        handleClose()
      } else {
        dispatch(addEmployee(newEmployeeData))
        handleClose()
      }
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
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitDisabled()} >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal
