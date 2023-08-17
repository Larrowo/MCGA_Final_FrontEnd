import styles from './addModal.module.css'

function index ({ newEmployeeData, handleChange }) {
  return (
    <form action="submit">
      <div className={styles.inputContainer}>
        <label htmlFor='name'>New name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={newEmployeeData.name}
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
          onChange={handleChange}
        />
      </div>
    </form>
  )
}
export default index
