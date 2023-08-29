import styles from './addModal.module.css'

function index ({ newEmployeeData, setNewEmployeeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <div className={styles.createContainer}>
      <form action="submit">
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Name</label>
          <input
            className={styles.createInput}
            type='text'
            id='name'
            name='name'
            value={newEmployeeData.name}
            placeholder="Enter new employee's name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='surname'>Last name</label>
          <input
            className={styles.createInput}
            type='text'
            id='surname'
            name='surname'
            value={newEmployeeData.surname}
            placeholder="Enter new employee's last name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='DNI' >DNI</label>
          <input
            className={styles.createInput}
            type='text'
            id='DNI'
            name='DNI'
            value={newEmployeeData.DNI}
            placeholder="Enter new employee's DNI"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='email' >Email</label>
          <input
            className={styles.createInput}
            type='text'
            id='email'
            name='email'
            value={newEmployeeData.email}
            placeholder="Enter new employee's email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='nationality' >Nationality</label>
          <input
            className={styles.createInput}
            type='text'
            id='nationality'
            name='nationality'
            value={newEmployeeData.nationality}
            placeholder="Enter new employee's email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='birthDate' >Birth Date</label>
          <input
            className={styles.createInput}
            type='date'
            id='birthDate'
            name='birthDate'
            value={newEmployeeData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  )
}
export default index
