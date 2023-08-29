import styles from './editModal.module.css'

function index ({ newEmployeeData, employee, setNewEmployeeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    console.log(newEmployeeData)
  }
  return (
    <div className={styles.editContainer} >
      <form action="submit">
        <div className={styles.inputContainer}>
          <label htmlFor='name'>New name</label>
          <input
            className={styles.editInput}
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
            className={styles.editInput}
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
            className={styles.editInput}
            type='text'
            id='email'
            name='email'
            value={newEmployeeData.email}
            placeholder={employee.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <span className={styles.infoText}>If no new input is included, the current employee information will be used</span>
    </div>
  )
}
export default index
