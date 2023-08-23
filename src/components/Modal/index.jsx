import { useDispatch } from 'react-redux'
import styles from './modal.module.css'
import { useState } from 'react'
import { addEmployee, editEmployee } from '../../Redux/Employees/thunks'
import { actionTypes } from '../../models/actionTypes'
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

  const handleEditSubmit = (e) => {
    e.preventDefault()

    const fieldsToUpdate = ['name', 'surname', 'email', 'DNI', 'birthDate', 'nationality']
    const updatedEmployeeData = { ...newEmployeeData }

    fieldsToUpdate.forEach((field) => {
      if (!updatedEmployeeData[field]) {
        updatedEmployeeData[field] = employee[field]
      }
    })

    setNewEmployeeData(updatedEmployeeData)

    // Dispatch the editEmployee action or perform any other actions
    dispatch(editEmployee(employee._id, updatedEmployeeData))
    handleClose()
    // console.log('final employee data: ', updatedEmployeeData)
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    if (!isSubmitDisabled()) {
      dispatch(addEmployee(newEmployeeData))
      handleClose()
    }
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
          <h2>{action}</h2>
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
          <button
            type="submit"
            onClick={action === actionTypes.EDIT ? handleEditSubmit : handleCreateSubmit}
            disabled={action === actionTypes.CREATE ? isSubmitDisabled() : false} >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal
