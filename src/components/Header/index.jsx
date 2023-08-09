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
    <div className={styles.container} >
     <div>HEADER</div>
      <section className={styles.buttonContainer} >
        <button onClick={() => navigateTo(PublicRoutes.HOME)} >HOME button</button>
        <button onClick={() => navigateTo(PrivateRoutes.DASHBOARD)} >DASHBOARD button</button>
      </section>
      <button><a href="https://github.com/Larrowo/MCGA_Final_FrontEnd" >Github</a></button>
    </div>
  )
}
export default index
