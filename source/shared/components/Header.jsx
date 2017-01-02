import React from 'react'
import {Link} from 'react-router'
import styles from './Header.css'

function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Mi REact app
      </h1>

      <nav role='navigation' className={styles.navigation}>
        <Link to='/' className={styles.link}>
          Home
        </Link>
        <a href='https://www.google.com'
          target='_blank'
          className={styles.link}>
          Google
         </a>
      </nav>
    </header>
  )
}

export default Header
