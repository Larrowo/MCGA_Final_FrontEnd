import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './layout.module.css'

function index ({ children }) {
  return (
    <div className={styles.container} >
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default index
