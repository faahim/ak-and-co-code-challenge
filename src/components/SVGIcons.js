import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/SearchBox.module.scss'

// This file is used to export different SVG files as components
// so can be imported and used as inline SVG throught the app/site
const SearchIcon = ({ handleClick }) => (
  <svg
    onClick={handleClick}
    className={styles.searchIcon}
    width="20px"
    height="20px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7432 18.1609L15.9545 14.3833C18.8423 10.6659 18.3421 5.34397 14.8122 2.22976C11.2824 -0.884446 5.93955 -0.717492 2.61103 2.61103C-0.717492 5.93955 -0.884446 11.2824 2.22976 14.8122C5.34397 18.3421 10.6659 18.8423 14.3833 15.9545L18.1609 19.7321C18.603 20.1107 19.262 20.0852 19.6736 19.6736C20.0852 19.262 20.1107 18.603 19.7321 18.1609H19.7432ZM2.2373 8.92318C2.2373 5.23067 5.23068 2.23729 8.9232 2.23729C12.6157 2.23729 15.6091 5.23067 15.6091 8.92318C15.6091 12.6157 12.6157 15.6091 8.9232 15.6091C5.23068 15.6091 2.2373 12.6157 2.2373 8.92318Z"
      fill="white"
    />
  </svg>
)

SearchIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default SearchIcon
