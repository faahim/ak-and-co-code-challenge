import React from 'react'
import Contact from './Contact'
import styles from '../styles/Footer.module.scss'

const Footer = () => (
  <footer>
    <Contact />
    <div className={styles.bottomBar}>
      <p>© Copyright UFC Fightpass, 2017</p>
    </div>
  </footer>
)

export default Footer
