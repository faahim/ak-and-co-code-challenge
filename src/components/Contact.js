import React from 'react'
import Container from '../layouts/Container'
import styles from '../styles/Contact.module.scss'

const Contact = () => (
  <div className={styles.contactRow}>
    <Container>
      <div className={styles.contactWrapper}>
        <h2>Can&#39;t find what you looking for?</h2>
        <a href="#">Contact Support</a>
      </div>
    </Container>
  </div>
)

export default Contact
