import styles from './addModal.module.css'

function index ({ newEmployeeData, handleChange }) {
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
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email' >DNI</label>
        <input
          type='text'
          id='DNI'
          name='DNI'
          value={newEmployeeData.DNI}
          onChange={handleChange}
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
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email' >Nationality</label>
        <input
          type='text'
          id='nationality'
          name='nationality'
          value={newEmployeeData.nationality}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email' >Birth Date</label>
        <input
          type='date'
          id='birthDate'
          name='birthDate'
          value={newEmployeeData.birthDate}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}
export default index
