import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Container.module.scss'

// Wrapper component with fixed width
const Container = ({ children, className, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}

export default Container
