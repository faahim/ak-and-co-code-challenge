import React from 'react'
import PropTypes from 'prop-types'
import SearchBox from './SearchBox'
import styles from '../styles/header.module.scss'

const Header = ({ logo, backgroundImage }) => (
  <header
    style={{
      backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.98))`,
    }}
  >
    <img src={logo} className={styles.logo} alt="UFC Logo" />
    <h2>What can we help with?</h2>
    <SearchBox />
  </header>
)

Header.propTypes = {
  logo: PropTypes.node.isRequired,
  backgroundImage: PropTypes.node.isRequired,
}

export default Header
