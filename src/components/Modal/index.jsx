import { useDispatch } from 'react-redux'
import { addEmployeeLoading } from '../../Redux/Employees/actions'
import styles from './modal.module.css'

const Modal = ({ isOpen, handleClose, action, employee }) => {
  return (
  <div className={isOpen ? styles.modalOpen : styles.modal}>
    <div className={styles.modalContent}>
      <div className={styles.topRow} >
        <h2>{action}</h2>
        <button className={styles.cancelButton} onClick={handleClose}>Cancel</button>
      </div>
      <div className={styles.middleRow} >
        <p>{employee.name}</p>
        <p>{employee.surname}</p>
        <p>{employee.email}</p>
      </div>
      <div className={styles.bottomRow} >
        <button>Save</button>
      </div>

    </div>
  </div>
  )
}

export default Modal
