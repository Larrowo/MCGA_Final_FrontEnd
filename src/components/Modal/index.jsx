import { useDispatch } from 'react-redux'
import styles from './modal.module.css'
import { useState } from 'react'
import { addEmployee, editEmployee } from '../../Redux/Employees/thunks'
import { actionTypes } from '../../models/actionTypes'
import EditModal from '../Modal/EditModal'
import AddModal from '../Modal/AddModal'

const Modal = ({ isOpen, handleClose, action, employee }) => {
  const dispatch = useDispatch()
  const [isConfirming, setIsConfirming] = useState(false)
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
    setIsConfirming(false)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

    const fieldsToUpdate = [
      'name',
      'surname',
      'email',
      'DNI',
      'birthDate',
      'nationality'
    ]
    const updatedEmployeeData = { ...newEmployeeData }

    fieldsToUpdate.forEach((field) => {
      if (!updatedEmployeeData[field]) {
        updatedEmployeeData[field] = employee[field]
      }
    })
    setNewEmployeeData(updatedEmployeeData)
    dispatch(editEmployee(employee._id, updatedEmployeeData))
    handleClose()
    setIsConfirming(false)
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    if (!isSubmitDisabled()) {
      dispatch(addEmployee(newEmployeeData))
      handleClose()
    }
    setIsConfirming(false)
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

  return (
    <div className={isOpen ? styles.modalOpen : styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topRow} >
          <h2>{action === actionTypes.EDIT ? `Editing: ${employee.name} ${employee.surname}` : 'Add a new employee:'}</h2>
          <button className={styles.cancelButton} onClick={handleCancelButtonClick}>Cancel</button>
        </div>
        { action === actionTypes.EDIT
          ? <EditModal
            newEmployeeData={newEmployeeData}
            setNewEmployeeData={setNewEmployeeData}
            employee={employee}
          />
          : <AddModal
            newEmployeeData={newEmployeeData}
            setNewEmployeeData={setNewEmployeeData}
          />
        }
        <div className={styles.bottomRow} >
          {isConfirming
            ? <div className={styles.confirmationContainer}>
              <p>Do you confirm this action?</p>
              <button
                className={styles.confirmButton}
                type="submit"
                onClick={action === actionTypes.EDIT ? handleEditSubmit : handleCreateSubmit}>
                 CONFIRM
              </button>
              <button
                className={styles.cancelConfirmButton}
                onClick={() => setIsConfirming(!isConfirming)}
              >CANCEL</button>
            </div>
            : <button
              type="submit"
              onClick={() => setIsConfirming(!isConfirming)}
              disabled={action === actionTypes.CREATE ? isSubmitDisabled() : false} >
            Save
            </button>
          }
        </div>
      </div>
    </div>
  )
}
export default Modal
