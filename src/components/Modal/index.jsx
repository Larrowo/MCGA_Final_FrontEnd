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
    email: ''
  })

  const dispatch = useDispatch()

  const handleCancelButtonClick = () => {
    handleClose()
    setNewEmployeeData({
      name: '',
      surname: '',
      email: ''
    })
  }

  const handleSubmit = () => {
    dispatch(editEmployee(employee._id, newEmployeeData))
    handleClose()
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
            setNewEmployeeData={setNewEmployeeData} />
          : <AddModal/>
        }
        <div className={styles.bottomRow} >
          <button onClick={handleSubmit} >Save</button>
        </div>
      </div>
    </div>
  )
}
export default Modal
