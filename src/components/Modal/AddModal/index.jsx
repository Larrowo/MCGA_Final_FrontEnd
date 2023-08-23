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
    <form action="submit">
      <div className={styles.inputContainer}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={newEmployeeData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='surname'>Last name</label>
        <input
          type='text'
          id='surname'
          name='surname'
          value={newEmployeeData.surname}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='DNI' >DNI</label>
        <input
          type='text'
          id='DNI'
          name='DNI'
          value={newEmployeeData.DNI}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email' >Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={newEmployeeData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='nationality' >Nationality</label>
        <input
          type='text'
          id='nationality'
          name='nationality'
          value={newEmployeeData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='birthDate' >Birth Date</label>
        <input
          type='date'
          id='birthDate'
          name='birthDate'
          value={newEmployeeData.birthDate}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  )
}
export default index
