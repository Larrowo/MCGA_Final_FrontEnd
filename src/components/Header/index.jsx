import { useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../models/routes'
import styles from './header.module.css'

function index () {
  const navigate = useNavigate()

  const navigateTo = (destination) => {
    destination === PrivateRoutes.DASHBOARD
      ? navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
      : navigate(`/${PublicRoutes.HOME}`, { replace: true })
  }

  return (
    <header className={styles.headerContainer} >
      <h2>MCGA - FINAL</h2>
      <section className={styles.buttonContainer} >
        <button className={styles.headerButton} onClick={() => navigateTo(PublicRoutes.HOME)} >HOME</button>
        <button className={styles.headerButton} onClick={() => navigateTo(PrivateRoutes.DASHBOARD)} >DASHBOARD</button>
      </section>
      <button><a href="https://github.com/Larrowo/MCGA_Final_FrontEnd" >Github</a></button>
    </header>
  )
}
export default index
