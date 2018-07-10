import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/header.module.scss'

const Header = ({ logo, backgroundImage }) => (
  <header
    style={{
      backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
    }}
  >
    <img src={logo} className={styles.logo} alt="UFC Logo" />
    <h2>What can we help with?</h2>
  </header>
)

Header.propTypes = {
  logo: PropTypes.node.isRequired,
  backgroundImage: PropTypes.node.isRequired,
}

export default Header
