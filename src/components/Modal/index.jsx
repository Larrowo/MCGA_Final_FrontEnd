import { useDispatch } from 'react-redux'
import { addEmployeeLoading } from '../../Redux/Employees/actions'
import styles from './modal.module.css'
import { useState } from 'react'
import { addEmployee, editEmployee } from '../../Redux/Employees/thunks'

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
  const handleChange = (event) => {
    setNewEmployeeData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
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
        <div className={styles.middleRow} >
          <form action="submit">
            <div className={styles.inputContainer}>
              <label htmlFor='name'>New name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={newEmployeeData.name}
                placeholder={employee.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor='surname'>New last name</label>
              <input
                type='text'
                id='surname'
                name='surname'
                value={newEmployeeData.surname}
                placeholder={employee.surname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor='email' >New email</label>
              <input
                type='text'
                id='email'
                name='email'
                value={newEmployeeData.email}
                placeholder={employee.email}
                onChange={handleChange}
              />
            </div>
          </form>
          <span>If no new input is included, the current employee information will be used</span>
        </div>
        <div className={styles.bottomRow} >
          <button onClick={handleSubmit} >Save</button>
        </div>
      </div>
    </div>
  )
}
export default Modal
