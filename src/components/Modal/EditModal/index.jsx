import styles from './editModal.module.css'

function index ({ newEmployeeData, employee, setNewEmployeeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    // // If the input is empty, use the existing employee data
    // const newValue = value !== '' ? value : employee[name]

    setNewEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    console.log(newEmployeeData)
  }
  return (
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
  )
}
export default index
